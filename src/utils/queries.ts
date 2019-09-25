import { gql } from "apollo-boost"

export const SEARCH_REPOS = gql`
  query($search: String!) {
    search(query: $search, type: REPOSITORY, first: 30) {
      edges {
        node {
          ... on Repository {
            name
            nameWithOwner
            description
            id
            url
            primaryLanguage {
              name
              color
            }
            watchers {
              totalCount
            }
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
          }
        }
      }
    }
  }
`