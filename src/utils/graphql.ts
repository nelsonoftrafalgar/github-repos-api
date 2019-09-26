import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost"

import { setContext } from "apollo-link-context"
import { token } from "./graphql-token"

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'https://api.github.com/graphql'
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache
})