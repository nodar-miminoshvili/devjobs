'use server';

import { cookies } from 'next/headers';
import admin from '@/firebaseAdmin';

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
