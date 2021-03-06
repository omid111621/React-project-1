'use strict';

const express = require ('express');
const fs = require('fs');
const {ApolloServer} = require ('apollo-server-express');

let aboutMessage = "Issue Tracker API v1.0";

const issuesDB = [
    {
      id: 1, status: 'New', owner: 'Ravan', effort: 5,
      created: new Date('2019-01-15'), due: undefined,
      title: 'Error in console when clicking Add',
    },
    {
      id: 2, status: 'Assigned', owner: 'Eddie', effort: 14,
      created: new Date('2019-01-16'), due: new Date('2019-02-01'),
      title: 'Missing bottom border on panel',
    },
  ];
 
//Resolvers>>
const resolvers = {
    Query:{
        about: () => aboutMessage,
        issueList,
    },
    Mutation: {
        setAboutMessage,
    }
};
 function setAboutMessage(_, {message}) {
     return aboutMessage = message;
 }
 function issueList() {
     return issuesDB;
 }

 const server = new ApolloServer({
     typeDefs : fs.readFileSync('./server/schema.graphql', 'utf-8'),
     resolvers,
 });
 
 //===========Express=========//
 const app = express();
 app.use(express.static('public'));
 server.applyMiddleware({app, path: '/graphql'});

 app.listen(3000, () => 
    console.log('App started on port 3000')
    );