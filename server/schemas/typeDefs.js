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
  type Auth {
    token: ID!
    user: User
  }
  type Token {
    token: String!
  }
  type AuthUser {
    authed: Boolean!
    userId: ID!
  }
  type AuthError {
    message: String!
    status: Int!
  }

  input CreateUserInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    phone_number: String
  }

  type Query {
    getAllUsers: [User!]!
    getUser(userId: ID!): User
    authUser(token: String!): AuthUser!
  }
  type Mutation {
    createUser(userInput: CreateUserInput!): Auth
    loginUser(email: String!, password: String!): Token!
  }
`;

module.exports = typeDefs;
