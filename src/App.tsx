import { Fragment } from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//        Components

import NewTask from "./modules/components/Tab/NewTask";
import { ResumenTasks } from "./modules/ResumenTasks";

import { Button, Container } from "@material-ui/core";
import HeaderApp from "./modules/components/Header/HeaderApp";
import { client } from "./shared/api";
import LoginView from "./modules/Auth/LoginView";
import { useAuth0, User } from "@auth0/auth0-react";
import auth from "./shared/auth";

function App() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>

          {isAuthenticated && (
            <>
              <HeaderApp />
              <Container maxWidth="lg">
                <Switch>
                  <Route exact path="/login" component={LoginView} />

                  <Route exact path="/" component={ResumenTasks} />
                  <Route exact path="/tasks/new" component={NewTask} />
                  {/* 8Base */}
                  <Route exact path="/auth/callback" component={ResumenTasks} />
                  {/* <Route exact path="/logout" component={Logout} /> */}
                </Switch>
              </Container>
            </>
          ) /* : (
            loginWithRedirect()
          ) */}
          <Button onClick={() => loginWithRedirect()}>
            Auth0 | Redirect to Login
          </Button>
          <Button onClick={() => logout()}>Auth0 | Log-Out </Button>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
