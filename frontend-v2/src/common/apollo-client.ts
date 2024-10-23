import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "isomorphic-unfetch";

const apiGatewayUrl = "https://explorer.bit-rock.io/api/";

export const apolloClient = new ApolloClient({
  ssrMode: false,
  link: new HttpLink({
    uri: apiGatewayUrl,
    fetch,
    credentials: "same-origin",
  }),
  cache: new InMemoryCache().restore({}),
});
