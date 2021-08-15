import { FC } from 'react'
import { LoginForm } from '../../components/LoginForm'
import { Wrapper } from './style'

interface IProps {

}

export const Register: FC<IProps> = () => {
  return (
    <Wrapper>
      <LoginForm variant='register' />
    </Wrapper>
  )
}