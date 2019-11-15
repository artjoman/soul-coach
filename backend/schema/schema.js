var {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

var db = require('../db/db');

var Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});
module.exports = Schema;
