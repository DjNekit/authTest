import { useAuth } from '../../hooks/useAuth'
import {
  Route,
  Redirect,
} from "react-router-dom";

export function PrivateRoute({ children, ...props }) {
  const { user } = useAuth();

  return (
    <Route
      {...props}
    >
      {({ location }) =>
        user 
          ? children
          : <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
      }
    </Route>
  );
}