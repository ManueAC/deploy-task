import { Fragment } from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//        Components

import NewTask from "./modules/components/Tab/NewTask";
import { ResumenTasks } from "./modules/ResumenTasks";
import { Container } from "@material-ui/core";
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
          : null
          }
          <Route exact path="/logout" component={LogoutView} /> 
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
