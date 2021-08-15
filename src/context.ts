import { createContext } from 'react'

export const authContext = createContext<{ user: string | null }>({
  user: null
})