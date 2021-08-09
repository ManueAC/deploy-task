import { Fragment } from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//        Components

import NewTask from "./modules/components/Tab/NewTask";
import { ResumenTasks } from "./modules/ResumenTasks";

import { Container } from "@material-ui/core";
import HeaderApp from "./modules/components/Header/HeaderApp";
import { client } from "./shared/api";

// import { IAuthClient } from ''
// import { AuthCallback } from './modules/auth/index';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <HeaderApp />
          <Container maxWidth="lg">
            <Switch>
              <Route exact path="/" component={ResumenTasks} />
              <Route exact path="/tasks/new" component={NewTask} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
