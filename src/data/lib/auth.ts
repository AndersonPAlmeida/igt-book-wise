import { AuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import { PrismaAdapter } from './prisma-adapter'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(),
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
      profile: (profile: GoogleProfile) => {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          avatar_url: profile.picture,
        }
      },
    }),
  ],
  session: {
    maxAge: 60 * 60 * 12, // 12 hours
  },
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

    async session({ session, user }) {
      return {
        ...session,
        user,
      }
    },
  },
}
