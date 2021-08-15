import styled from 'styled-components'
import { Field } from 'formik';

export const H2 = styled.h2`
  margin: 0;
  text-align: center;
`
export const Logo = styled.picture`
  img {
    max-width: 200px;
  }
  @media (max-width: 530px) {
    display: none;
  }
`

export const Content = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto 1fr;
  align-items: center;

  @media (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`

export const InputsArea = styled.div`
  display: grid;
  grid-gap: 10px;
`

export const Button = styled.button`
  padding: .5rem 1.5rem;
  border: none;
  border-radius: 20px;
  background-color: #09a61e;
  color: #fff;
  font-weight: bold;
  transition: all .3s ease-out;
  cursor: pointer;

  &:hover {
    background-color: #0ad024;
  }

  &:disabled {
    background-color: #eee;
  }
`

export const Div = styled.div`
  display: grid;
  grid-gap: 1.5rem;

  a {
    text-align: center;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const ErrorBlock = styled.div`
  font-size: .8rem;
  color: red;
  padding-left: 1rem;
`
export const CustomField = styled(Field)`
  padding: .5rem 1.5rem;
  border: none;
  border-radius: 20px;
  background-color: #eee;
  outline: none;

  transition: all .3s ease-out;

  &:focus {
    transform: scale(1.05);
  }
`