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
import { useAuth0 } from "@auth0/auth0-react";
// import { IAuthClient } from ''
// import { AuthCallback } from './modules/auth/index';

function App() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <LoginView />
          {isAuthenticated && (
            <>
              <HeaderApp />
              <Container maxWidth="lg">
                <Switch>
                  <Route exact path="/" component={ResumenTasks} />
                  <Route exact path="/tasks/new" component={NewTask} />
                  <Route exact path="/login" component={LoginView} />
                </Switch>
              </Container>
            </>
          )}
          <Button onClick={() => loginWithRedirect()}>Redirect to Login</Button>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
