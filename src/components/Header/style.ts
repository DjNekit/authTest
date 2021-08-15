import styled from 'styled-components'

export const Wrapper = styled.nav`
  background-color: rgba(0, 0, 0, .2);
`

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    text-decoration: none;
    padding: 1.5rem 1rem;
    color: #fff;
    font-weight: bold;
    transition: all .3s ease-out;

    &.active,
    &:hover {
      background-color: #9a1bf4;
    }
  }
`