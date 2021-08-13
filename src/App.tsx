import { Fragment } from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//        Components

import NewTask from "./modules/components/Tab/NewTask";
import { ResumenTasks } from "./modules/ResumenTasks";
import { Container, Typography } from "@material-ui/core";
import HeaderApp from "./modules/components/Header/HeaderApp";
import { client } from "./shared/api";
import LogoutView from "./modules/Auth/LogoutView";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Typography>Text Helper</Typography>
          {isAuthenticated ? (
            <>
              <HeaderApp />
              <Container maxWidth="lg">
                <Switch>
                  <Route exact path="/" component={ResumenTasks} />
                  <Route exact path="/tasks/new" component={NewTask} />
                </Switch>
              </Container>
            </>
          
          ) 
          : <Route exact path="/logout" component={LogoutView} /> 
          }
          <LogoutView />
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
