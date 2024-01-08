const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    phone_number: String
    first_time_log: Boolean
  }

  type 
`;

module.exports = typeDefs;
