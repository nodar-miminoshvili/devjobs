import { auth } from '@/firebaseConfig';

import { signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from 'firebase/auth';
import { handleLogout } from './actions';

export async function handleLogin(providerToUse: 'google' | 'github') {
  const provider = providerToUse === 'google' ? new GoogleAuthProvider() : new GithubAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();

    const response = await fetch('/api/sessionLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    });

    if (response.ok) {
      console.log('Successful Login');
    } else {
      console.error('Failed to sign in');
    }
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
}

export const logOut = async () => {
  signOut(auth);
  handleLogout();
};
