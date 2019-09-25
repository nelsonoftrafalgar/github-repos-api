import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost"

import { setContext } from "apollo-link-context"

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'https://api.github.com/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = ''
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