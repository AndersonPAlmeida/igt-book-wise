import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          scope:
            'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      if (account?.error === 'access_denied') {
        return '/?error=access_denied'
      }
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log('URL', url)
      console.log('BASEURL', baseUrl)

      if (url.startsWith('/')) {
        return `${baseUrl}${url}`
      }

      return `${baseUrl}/home`
    },
  },
}
