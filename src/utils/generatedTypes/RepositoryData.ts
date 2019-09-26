/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RepositoryData
// ====================================================

export interface RepositoryData_search_edges_node_Repository_primaryLanguage {
  __typename: "Language";
  /**
   * The name of the current language.
   */
  name: string;
  /**
   * The color defined for the current language.
   */
  color: string;
}

export interface RepositoryData_search_edges_node_Repository_watchers {
  __typename: "UserConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface RepositoryData_search_edges_node_Repository_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface RepositoryData_search_edges_node_Repository_forks {
  __typename: "RepositoryConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface RepositoryData_search_edges_node_Repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
  /**
   * The description of the repository.
   */
  description: string;
  id: string;
  /**
   * The HTTP URL for this repository
   */
  url: string;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: RepositoryData_search_edges_node_Repository_primaryLanguage;
  /**
   * A list of users watching the repository.
   */
  watchers: RepositoryData_search_edges_node_Repository_watchers;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: RepositoryData_search_edges_node_Repository_stargazers;
  /**
   * A list of direct forked repositories.
   */
  forks: RepositoryData_search_edges_node_Repository_forks;
}

export type RepositoryData_search_edges_node = RepositoryData_search_edges_node_Repository;

export interface RepositoryData_search_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: RepositoryData_search_edges_node;
}

export interface RepositoryData_search {
  __typename: "SearchResultItemConnection";
  /**
   * A list of edges.
   */
  edges: RepositoryData_search_edges[];
}

export interface RepositoryData {
  /**
   * Perform a search across resources.
   */
  search: RepositoryData_search;
}

export interface RepositoryDataVariables {
  search: string;
}
