'use server';

import { cookies } from 'next/headers';
import admin from '@/firebaseAdmin';
import { keywordsStrIntoArr } from './helperFunctions';
import {
  DocumentReference,
  DocumentSnapshot,
  FieldValue,
  Timestamp,
} from 'firebase-admin/firestore';
import { notFound } from 'next/navigation';

const JOBS_PER_PAGE = 9;
const jobsRef = admin.firestore().collection('jobs');
const applicaitonsRef = admin.firestore().collection('applications');

export const switchTheme = (theme: Theme) => {
  theme === 'system' ? cookies().delete('theme') : cookies().set('theme', theme);
};

export const handleLogout = async () => {
  const user = await getUserFromCookie();
  await admin.auth().revokeRefreshTokens(user?.uid!);
  cookies().delete('session');
};

export async function getUserFromCookie() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get('session')?.value;

  if (sessionCookie) {
    try {
      const decodedClaims = await admin.auth().verifySessionCookie(sessionCookie, true);
      return decodedClaims;
    } catch (error) {
      console.error('Error verifying session cookie:', error);
      return null;
    }
  }

  return null;
}
export const generateQueryRef = async (searchParams: SearchParams) => {
  const { keywords, location, fullTime } = searchParams;

  let queryRef = jobsRef.orderBy('postedAt', 'desc');

  if (keywords)
    queryRef = queryRef.where('keywords', 'array-contains-any', keywordsStrIntoArr(keywords));
  if (location) queryRef = queryRef.where('location', '==', location);
  if (fullTime) queryRef = queryRef.where('fullTime', '==', Boolean(fullTime));

  return queryRef;
};

export const handleQuerySearch = async (searchParams: SearchParams) => {
  const currentPage = searchParams.page ? Number(searchParams.page) : 1;

  const totalPages = await calculatePageCount(searchParams);
  if (currentPage > totalPages) notFound();

  let queryRef = await generateQueryRef(searchParams);

  const lastDoc = await getLastDocumentRecursively(queryRef, currentPage);

  queryRef = lastDoc
    ? queryRef.startAfter(lastDoc).limit(JOBS_PER_PAGE)
    : queryRef.limit(JOBS_PER_PAGE);

  const querySnapshot = await queryRef.get();
  return { querySnapshot };
};

export const calculatePageCount = async (searchParams: SearchParams) => {
  const queryRef = await generateQueryRef(searchParams);
  const totalCount = await queryRef.count().get();
  if (totalCount.data().count === 0) return 1;
  const totalPages = Math.ceil(totalCount.data().count / JOBS_PER_PAGE);

  return totalPages;
};

const getLastDocumentRecursively = async (
  jobsQuery: admin.firestore.Query,
  pageNumber: number,
  lastDoc: admin.firestore.QueryDocumentSnapshot | null = null
): Promise<admin.firestore.QueryDocumentSnapshot | null> => {
  if (pageNumber === 1) return null;

  const q = lastDoc
    ? jobsQuery.startAfter(lastDoc).limit(JOBS_PER_PAGE)
    : jobsQuery.limit(JOBS_PER_PAGE);

  const querySnapshot = await q.get();
  const newLastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

  if (pageNumber === 2) return newLastDoc;

  return await getLastDocumentRecursively(jobsQuery, pageNumber - 1, newLastDoc);
};

export const getJobDetailsById = async (jobId: string) => {
  const docSnap = await jobsRef.doc(jobId).get();

  if (!docSnap.exists) notFound();

  const job = { ...docSnap.data(), id: docSnap.id } as Job;
  return job;
};

export const applyToJob = async (fullName: string, jobId: string) => {
  const user = await getUserFromCookie();
  if (!user) throw new Error('Invalid Job Application Request. Authorization is required.');
  const userId = user.uid;
  const docRef = applicaitonsRef.doc(userId);
  const docSnap = await docRef.get();

  if (docSnap.exists) {
    await docRef.update({
      jobsApplied: FieldValue.arrayUnion(jobId),
      jobsAppliedWithTimestamps: FieldValue.arrayUnion({
        appliedJobRef: admin.firestore().doc('jobs/' + jobId),
        appliedAt: Timestamp.now(),
      }),
    });
  } else {
    await docRef.set({
      fullName,
      jobsApplied: [jobId],
      jobsAppliedWithTimestamps: FieldValue.arrayUnion({
        appliedJobRef: admin.firestore().doc('jobs/' + jobId),
        appliedAt: Timestamp.now(),
      }),
    });
  }
};

type JobApplications = {
  fullName: string;
  jobsApplied: string[];
  jobsAppliedWithTimestamps: [
    {
      appliedJobRef: DocumentReference;
      appliedAt: Timestamp;
    }
  ];
};

export const checkIfUserApplied = async (userId: string, jobId: string) => {
  const docSnap = await applicaitonsRef.doc(userId).get();

  if (docSnap.exists) {
    const jobApplications = docSnap.data() as JobApplications;
    return jobApplications.jobsApplied.includes(jobId);
  }

  return false;
};

type UserApplications = {
  jobsApplied: string[];
  jobsAppliedWithTimestamps: {
    appliedAt: { seconds: number; nanoseconds: number };
    appliedJobRef: DocumentReference;
  }[];
};

export const getAppliedJobs = async (uid: string) => {
  const docRef = applicaitonsRef.doc(uid);
  const docSnap = await docRef.get();
  const applications = docSnap.data() as UserApplications;

  const jobsByReferencePromises: Promise<DocumentSnapshot>[] =
    applications.jobsAppliedWithTimestamps.map(applicationDetails =>
      applicationDetails.appliedJobRef.get()
    );
  const resolvedJobsSnap = await Promise.all(jobsByReferencePromises);

  const appliedJobsWithApplicationTimestamp = resolvedJobsSnap.map((jobSnap, idx) => {
    return {
      id: jobSnap.id,
      ...jobSnap.data(),
      appliedAt: applications.jobsAppliedWithTimestamps[idx].appliedAt.seconds,
    };
  });
  return appliedJobsWithApplicationTimestamp;
};
