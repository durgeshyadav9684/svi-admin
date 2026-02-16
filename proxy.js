import { NextResponse } from 'next/server';

export function proxy(request) {
    const { pathname } = request.nextUrl;
    const authToken = request.cookies.get('auth_token');

    // Define protected routes
    const protectedRoutes = ['/dashboard', '/queries', '/products'];

    // Also protect root if it redirects to dashboard
    if (pathname === '/') {
        if (!authToken) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

    if (isProtectedRoute && !authToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Redirect to dashboard if logged in and trying to access login page
    if (pathname === '/login' && authToken) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
