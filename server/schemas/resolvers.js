const { User } = require('../models');
const jwt = require('jsonwebtoken');
const { signToken, authToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return User.find({});
    },
    getUser: async (_, { userId }) => {
      return User.findById(userId);
    },
    authUser: async (_, { token }) => {
      try {
        let decodedToken = authToken(token);
        if (!decodedToken) {
          return { authed: false, userId: null};
        }
        return { authed: true, userId: decodedToken.data._id };
      } catch (error) {
        throw new Error("Auth failed resolvers.js");
      }
    },
  },
  Mutation: {
    loginUser: async (_, { email, password }) => {
      let message = "";
      try {
        const user = await User.findOne({ email });
        if (!user) {
          message = "User does not exist.";
          throw new Error({ message });
        }
        const passwordAuthed = await user.isCorrectPassword(password);
        if (!passwordAuthed) {
          message = "Incorrect password.";
          throw new Error({ message });
        }
        const token = signToken(user);
        return token;
      } catch (error) {
        throw new Error(errMsg);
      }
    },
    createUser: async (_, { userInput }) => {
      console.log({ userInput });
      try {
        const foundUser = await User.findOne({ email: userInput.email });
        if (foundUser) {
          throw new Error("This account already exists.");
        }
        const user = new User(userInput);
        let token;
        user.userInput = userInput;
        await user.save();
        if (user) {
          token = signToken(user);
        }
        return token;
      } catch (error) {
        let err = error.message || "Error creating account";
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;
