import { FC } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Container } from '../Container'
import { Wrapper, Menu } from './style'

interface IProps {

}

export const Header: FC<IProps> = () => {
  const auth = useAuth()
  return (
    <Wrapper>
      <Container>
        <Menu>
          <NavLink to="/" exact>Главная</NavLink>
          {auth.user
            ? 
              <>
                <NavLink to="/profile" exact>Профиль</NavLink>
                <Link to="/" onClick={() => auth.signout()}>Выйти</Link>
              </>
            :
            <>
              <NavLink to="/login" exact>Войти</NavLink>
              <NavLink to="/register" exact>Регистрация</NavLink>
            </>
          }
        </Menu>
      </Container>
    </Wrapper>
  )
}