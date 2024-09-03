import { NextResponse } from 'next/server';
import admin from '@/firebaseAdmin';

export async function POST(req: Request) {
  const { idToken } = await req.json();

  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

  try {
    const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });

    const response = NextResponse.json({ message: 'Session cookie set successfully' });
    response.cookies.set('session', sessionCookie, {
      path: '/',
      httpOnly: true,
      secure: true,
      maxAge: expiresIn,
    });

    return response;
  } catch (error) {
    console.error('Error creating session cookie:', error);
    return NextResponse.json({ error: 'Unable to create session cookie' }, { status: 500 });
  }
}
