import express from 'express';
import resolvers from './resolver';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();
const PORT = 8000;

const root = resolvers;

app.get('/', (req, res) => {
  res.send('Up and running with graphql');
});

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));