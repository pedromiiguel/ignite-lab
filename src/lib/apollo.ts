import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o4so930j7601xigvon0y32/master',
  cache: new InMemoryCache(),
});
