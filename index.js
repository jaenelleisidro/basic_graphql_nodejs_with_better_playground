var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  introspection:true,
  graphiql: true,
}));


const expressPlayground = require('graphql-playground-middleware-express')
  .default

app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');