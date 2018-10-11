import Mutation from './Mutation';
import Query from './Query';

export default [
  Mutation,
  Query,
  `
scalar Date

schema {
  query: Query
  mutation: Mutation
}
`,
].join('');
