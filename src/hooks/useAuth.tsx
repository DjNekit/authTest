import axios from 'axios'
import { useContext, createContext, useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'

interface ISignin {
  variant: 'register' | 'login'
  values,
}

interface IAuth {
  user: string | null
  login: (props: ISignin) => void
  signout: () => void
  error: string
}
const authContext = createContext<IAuth>({
  user: null,
  login: () => { },
  signout: () => { },
  error: ''
})

export const useAuth = () => {
  return useContext(authContext)
}

const useProvideAuth = (): IAuth => {
  const [user, setUser] = useState<string>(localStorage.getItem('user') || '')
  const [error, setError] = useState('')

  const history = useHistory()
  const location = useLocation<{ from: { pathname: string } }>()
  const { from } = location.state || { from: { pathname: "/" } }

  useEffect(() => {
    localStorage.setItem('user', user)
  }, [user])

  const login = async ({ variant, values }) => {
    try {
      error && setError('')
      await axios.post(`${process.env.REACT_APP_API}/${variant}`, values)
      setUser(values.login)
      history.replace(from)

    } catch (error) {
      setError(error as string)
    }

  }

  const signout = () => {
    setUser('')
  }

  return {
    user,
    login,
    signout,
    error
  }
}

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}