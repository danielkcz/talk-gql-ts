import { GraphQLClient } from 'graphql-request'
import { DocumentNode } from 'graphql'
import purdy from 'purdy'

const client = new GraphQLClient('https://www.graphqlhub.com/graphql')

export function request<Q, V>(query: DocumentNode, variables: V): Promise<Q> {
  return client.request<Q>(query, variables)
}

export function print(req: Promise<any>) {
  req
    .then(resp => purdy(resp, { depth: null }))
    .catch(err => console.error(err))
}
