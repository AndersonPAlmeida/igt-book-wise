import { Account } from './Account'
import { Rating } from './Rating'
import { Session } from './Session'

export interface User {
  id: string
  name: string
  email: string
  avatar_url?: string | null
  created_at: Date

  accounts: Account[]
  sessions: Session[]
  ratings: Rating[]
}
