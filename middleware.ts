import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Match routes for which the middleware should run
export const config = {
    matcher: [
      /*
       * Match all request paths except:
       * - Static files (/_next)
       * - API routes (/api)
       * - Public files (/public)
       * - Login routes (/login and its children)
       */
      "/((?!_next|api|static|favicon.ico|robots.txt|login|register).*)",
    ],
  };