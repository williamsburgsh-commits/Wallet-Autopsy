import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/wallets(.*)',
  '/settings(.*)',
])

// Check if Clerk keys are available
const hasClerkKeys = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
                     process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'your_clerk_publishable_key_here';

export default hasClerkKeys 
  ? clerkMiddleware((auth, req) => {
      if (isProtectedRoute(req)) auth.protect()
    })
  : () => {
      // No-op middleware when Clerk is not configured
      return new Response(null, { status: 200 })
    }

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
