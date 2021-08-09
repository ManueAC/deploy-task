import { ApolloClient, InMemoryCache } from "@apollo/client";
import { REACT_API_DOMAIN } from "../constants/environment-constants";

export const client = new ApolloClient({
  uri: `${REACT_API_DOMAIN}`,
  cache: new InMemoryCache(),
});
