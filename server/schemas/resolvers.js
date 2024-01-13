const { User, Recipe } = require('../models');
const jwt = require('jsonwebtoken');
const { signToken, authToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // USER QUERIES
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
    // RECIPE QUERIES
    getAllRecipes: async () => {
      return Recipe.find({});
    },
    getRecipe: async (_, { recipeId }) => {
      return Recipe.findById(recipeId);
    },
  },
  Mutation: {
    // USER MUTATIONS
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
    updateUser: async (_, { userId, userInput }, context) => {
      if (userId !== context.user._id) {
        throw new Error('You can only update your own account');
      };
      const user = await User.findByIdAndUpdate(userId, userInput, { new: true });
      return user;
    },
    // RECIPE MUTATIONS
    addRecipe: async (_, { recipeInput }) => {
      const recipe = new Recipe(recipeInput);
      recipe.createdBy = context.user._id;
      await recipe.save();
      return recipe;
    },
    updateRecipe: async (_, { recipeId, recipeInput }, context) => {
      const recipe = await Recipe.findOneAndUpdate(
        { _id: recipeId, createdBy: context.user._id }, recipeInput, { new: true }
      );
      return recipe;
    },
    deleteRecipe: async (_, { recipeId }, context) => {
      const recipe = await Recipe.findOneAndDelete(
        { _id: recipeId, createdBy: context.user._id }
      );
      return recipe;
    },
    // VOTING MUTATIONS
    upvoteRecipe: async (_, { recipeId }, context) => {
      const user = await User.findById(context.user._id);
      if (user.upvotedRecipes.includes(recipeId)) {
        throw new Error('You have already upcoted this recipe');
      };
      user.upvotedRecipes.push(recipeId);
      await user.save();
      const recipe = await Recipe.findByIdAndUpdate(
        recipeId,
        { $inc: { votes: 1 } },
        { new: true }
      );
      return recipe;
    },
    downvoteRecipe: async (_, { recipeId }, context) => {
      const user = await User.findById(context.user._id);
      if (user.downvotedRecipes.includes(recipeId)) {
        throw new Error('You have already downvoted this recipe');
      };
      user.downvotedRecipes.push(recipeId);
      user.save();
      const recipe = await Recipe.findByIdAndUpdate(
        recipeId,
        { $inc: { votes: -1 } },
        { new: true }
      );
      return recipe;
    },
  },
};

module.exports = resolvers;
