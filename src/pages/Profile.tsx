import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'

interface IProps {

}

export const ProfilePage: FC<IProps> = () => {
  const auth: {user?} = useAuth()

  return (
    <h1>
      {auth.user && 'Is Authenticated'} Profile Page
    </h1>
  )
}