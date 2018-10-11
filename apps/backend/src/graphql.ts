import * as graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import schema from './schemas';

export default router => {
  try {
    const executableSchema = makeExecutableSchema({
      typeDefs: [schema],
      resolvers: resolvers(),
    });

    router.use(
      '/graphql',
      graphqlHTTP({
        schema: executableSchema,
        graphiql: true,
      }),
    );

    return router;
  } catch (error) {
    console.error('ERROR', error);
  }
};
