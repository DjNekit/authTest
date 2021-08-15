import { FC } from 'react'
import { LoginForm } from '../../components/LoginForm'
import { Wrapper } from './style'

interface IProps {

}

export const Login: FC<IProps> = () => {
  return (
    <Wrapper>
      <LoginForm variant='login' />
    </Wrapper>
  )
}