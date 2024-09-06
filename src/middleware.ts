import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()

  if (url.searchParams.get('error') === 'access_denied') {
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Especifique quais rotas o middleware deve aplicar (opcional)
export const config = {
  matcher: ['/api/auth/callback/google'], // Aplica o middleware na rota do callback do Google
}
