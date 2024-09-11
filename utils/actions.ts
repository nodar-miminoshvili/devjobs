'use server';

import { cookies } from 'next/headers';
import admin from '@/firebaseAdmin';
import {
  CollectionReference,
  QueryDocumentSnapshot,
  QueryFieldFilterConstraint,
  collection,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { keywordsStrIntoArr } from './helperFunctions';

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

export const handleQuerySearch = async (searchParams: SearchParams, JOBS_PER_PAGE: number) => {
  const jobsRef = collection(db, 'jobs');
  const currentPage = searchParams.page ? Number(searchParams.page) : 1;

  const { keywords, location, fullTime } = searchParams;
  const conditions: QueryFieldFilterConstraint[] = [];

  if (keywords)
    conditions.push(where('keywords', 'array-contains-any', keywordsStrIntoArr(keywords)));
  if (location) conditions.push(where('location', '==', location));
  if (fullTime) conditions.push(where('fullTime', '==', Boolean(fullTime)));

  const totalPages = await calculatePageCount(jobsRef, conditions, JOBS_PER_PAGE);
  const lastDoc = await getLastDocumentRecursively(jobsRef, conditions, JOBS_PER_PAGE, currentPage);

  const q = query(
    jobsRef,
    ...conditions,
    orderBy('idx'),
    startAfter(lastDoc),
    limit(JOBS_PER_PAGE)
  );

  const querySnapshot = await getDocs(q);
  return { querySnapshot, totalPages };
};

const calculatePageCount = async (
  collectionRef: CollectionReference,
  itemsQuery: QueryFieldFilterConstraint[],
  ITEMS_PER_PAGE: number
) => {
  const q = query(collectionRef, ...itemsQuery);
  const snapshot = await getCountFromServer(q);
  const totalCount = snapshot.data().count;
  const totalPages = Math.round(totalCount / ITEMS_PER_PAGE);

  return totalPages;
};

const getLastDocumentRecursively = async (
  collectionRef: CollectionReference,
  itemsQuery: QueryFieldFilterConstraint[],
  ITEMS_PER_PAGE: number,
  pageNumber: number,
  lastDoc: QueryDocumentSnapshot | null = null
): Promise<QueryDocumentSnapshot | null> => {
  if (pageNumber === 1) {
    return null;
  }

  const q = lastDoc
    ? query(
        collectionRef,
        ...itemsQuery,
        orderBy('idx'),
        startAfter(lastDoc),
        limit(ITEMS_PER_PAGE)
      )
    : query(collectionRef, ...itemsQuery, orderBy('idx'), limit(ITEMS_PER_PAGE));

  const querySnapshot = await getDocs(q);
  const newLastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

  if (pageNumber === 2) {
    return newLastDoc;
  }

  return await getLastDocumentRecursively(
    collectionRef,
    itemsQuery,
    ITEMS_PER_PAGE,
    pageNumber - 1,
    newLastDoc
  );
};

export const getJobDetailsById = async (jobId: string) => {
  const docRef = doc(db, 'jobs', jobId);
  const docSnap = await getDoc(docRef);
  const job = { ...docSnap.data(), id: docSnap.id } as Job;
  return job;
};
