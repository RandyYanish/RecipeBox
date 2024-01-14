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
    upvotedRecipes: [ID!]!
    downvotedRecipes: [ID!]!
  }
  type Recipe {
    _id: ID!
    title: String!
    ingredients: [String!]!
    instructions: String!
    votes: Int!
    createdBy: User!
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
  input RecipeInput {
    title: String!
    ingredients: [String!]!
    instructions: String!
  }

  type Query {
    getAllUsers: [User!]!
    getUser(userId: ID!): User
    authUser(token: String!): AuthUser!
    getRecipe(recipeId: ID!): Recipe
    getAllRecipes: [Recipe!]!
  }
  type Mutation {
    createUser(userInput: CreateUserInput!): Auth
    loginUser(email: String!, password: String!): Token!
    updateUser(userId: ID!, userInput: CreateUserInput!): User!
    addRecipe(recipeInput: RecipeInput!): Recipe!
    updateRecipe(recipeId: ID!, recipeInput: RecipeInput!): Recipe!
    deleteRecipe(recipeId: ID!): Recipe!
    upvoteRecipe(recipeId: ID!): Recipe!
    downvoteRecipe(recipeId: ID!): Recipe!
  }
`;

module.exports = typeDefs;
