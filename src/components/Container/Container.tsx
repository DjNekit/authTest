import { FC } from 'react'
import { Wrapper } from './style'

interface IProps {

}

export const Container: FC<IProps> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}