import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow home page
  if (pathname === '/') {
    return NextResponse.next()
  }

  // Allow Next.js internal files & static assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Redirect everything else
  return NextResponse.redirect(new URL('/', request.url))
}