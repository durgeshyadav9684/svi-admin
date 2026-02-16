import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { username, password } = await request.json();

        // Basic hardcoded credentials for admin
        if (username === 'admin' && password === 'admin@svi') {
            const response = NextResponse.json({ success: true, message: 'Logged in successfully' }, { status: 200 });

            // Set httpOnly cookie
            response.cookies.set('auth_token', 'premium_admin_token', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24, // 24 hours
                path: '/',
            });

            return response;
        }

        return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
