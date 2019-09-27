const express = require('express');
const expressGraphql = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();

app.use('/graphql',expressGraphql({
  schema, //schema: schema (if same name in key value then use one name)
  graphiql: true
}));

mongoose.connect('mongodb+srv://vidhya:vidhya@firstcluster-tyxwg.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true });

mongoose.connection.once('open',() => {
   console.log("MongoDB is connected and running");
});

app.listen(4000, ()=> {
  console.log("Express is now listening on port 4000");
});
