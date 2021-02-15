/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import { Plugin } from './plugin';

export const app: any = express();

const apollo = new ApolloServer({
  schema,
  subscriptions: false,
  plugins: [Plugin],
});

apollo.applyMiddleware({
  app,
  cors: false,
  disableHealthCheck: true,
});
