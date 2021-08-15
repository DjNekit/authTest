import { FC } from 'react'
import { Wrapper, Content } from './style'
import { Header } from '../Header'
import { Container } from '../Container'
import { Footer } from '../Footer'

interface IProps {

}

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Container>
          { children }
        </Container>
      </Content>
      <Footer />
    </Wrapper>
  )
}