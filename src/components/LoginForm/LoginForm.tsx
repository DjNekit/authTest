import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, ErrorMessage } from 'formik'
import { useAuth } from '../../hooks/useAuth'
import { H2, Logo, Content, InputsArea, Button, Div, ErrorBlock, CustomField } from './style'
import { Segment } from '../Segment'
import * as Yup from 'yup'

interface IProps {
  variant: 'login' | 'register'
}

const loginValues = {
  login: '',
  password: ''
}
const registerValues = {
  email: '',
  ...loginValues
}

const loginValidationObject = {
  login: Yup.string()
    .max(15, 'Слишком длинный')
    .min(4, 'Слишком короткий')
    .required('Обязательное поле'),

  password: Yup.string()
    .min(6, 'Слишком короткий')
    .required('Обязательное поле'),

}
const registerValidationObject = {
  ...loginValidationObject,
  email: Yup.string()
    .email('Некорректный email')
    .required('Обязательное поле'),
}

export const LoginForm: FC<IProps> = ({ variant }) => {
  const auth = useAuth()


  const onSubmit = async (values, data) => {
    console.log(data)

    await auth.login({
      variant: variant === 'register' ? 'register' : 'login',
      values
    })

    data.setSubmitting(false)
  }

  return (
    <Segment>
      <Content>
        <Logo>
          <source media="(max-width: 799px)" srcSet="./logo192.png" />
          <source media="(min-width: 800px)" srcSet="./logo512.png" />
          <img src="./logo512.png" alt="logo" />
        </Logo>
        <Formik
          initialValues={variant === 'register' ? registerValues : loginValues}
          validationSchema={Yup.object(variant === 'register' ? registerValidationObject : loginValidationObject)}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) =>
            <Form>
              <Div>
                <H2>{variant === 'login' ? 'Войти' : 'Зарегистрироваться'}</H2>
                <InputsArea>
                  {variant === 'register' &&
                    <>
                      <CustomField name="email" type='email' placeholder='Введите email' autoComplete='true' />
                      <ErrorBlock>
                        <ErrorMessage name="email" />
                      </ErrorBlock>

                    </>
                  }

                  <CustomField name="login" placeholder='Введите логин' type='text' autoComplete='true' />
                  <ErrorBlock>
                    <ErrorMessage name="login" />
                  </ErrorBlock>

                  <CustomField name="password" placeholder='Введите пароль' type='password' autoComplete='true' />
                  <ErrorBlock>
                    <ErrorMessage name="password" />
                  </ErrorBlock>

                  {auth.error &&
                    <ErrorBlock>
                      Неверные имя пользователя или пароль
                    </ErrorBlock>
                  }

                  {variant === 'register' &&
                    <label>
                      <input type='checkbox' /> Я не читал пользовательское соглашение
                    </label>
                  }

                </InputsArea>
                <Button type='submit' disabled={isSubmitting}>{variant === 'login' ? 'Войти' : 'Зарегистрироваться'}</Button>

                {variant === 'login'
                  ? <Link to='/register'>Еще нет аккаунта?</Link>
                  : <Link to='/login'>Уже есть аккаунт? Войти</Link>
                }
              </Div>
            </Form>
          }

        </Formik>
      </Content>
    </Segment>
  )
}