import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { PrivateRoute } from "./components/PrivateRoute"
import { ProfilePage } from "./pages/Profile"
import { HomePage } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { ProvideAuth } from "./hooks/useAuth"
import { GlobalStyle } from "./globalStyle"
import { Transition } from './components/Transition'

const routes = [
  { path: '/', name: 'Home', Component: HomePage, Route },
  { path: '/login', name: 'Login', Component: Login, Route },
  { path: '/register', name: 'Register', Component: Register, Route },
  { path: '/profile', name: 'Register', Component: ProfilePage, Route: PrivateRoute },
]

export const App = () => {
  return (
    <Router>
      <ProvideAuth>
        <Layout>
          <Switch>
            {routes.map(({ path, Component, Route }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <Transition show={match != null} animation='fade' style={{ height: '100%' }} unmountOnExit>
                    <Component />
                  </Transition>
                )}
              </Route>
            ))}
          </Switch>
        </Layout>
        <GlobalStyle />
      </ProvideAuth>
    </Router>
  )
}
