import { POKEAPI_GRAPHQL_ENDPOINT } from '@/constants';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: POKEAPI_GRAPHQL_ENDPOINT,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
