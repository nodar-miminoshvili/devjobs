'use server';

import { cookies } from 'next/headers';
import admin from '@/firebaseAdmin';
import {
  CollectionReference,
  QueryFieldFilterConstraint,
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
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

  const q = query(
    jobsRef,
    ...conditions,
    orderBy('idx'),
    startAt((currentPage - 1) * JOBS_PER_PAGE),
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
