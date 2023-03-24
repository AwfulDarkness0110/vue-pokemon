import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { POKEAPI_GRAPHQL_ENDPOINT } from '@/constants'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: POKEAPI_GRAPHQL_ENDPOINT
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})
