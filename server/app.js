const express = require('express');
const expressGraphql = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use('/graphql',expressGraphql({
  schema, //schema: schema (if same name in key value then use one name)
  graphiql: true
}));

app.listen(4000, ()=> {
  console.log("Express is now listening on port 4000");
});
