// require the npm package mongoose, which has methods to manipulate mongo databases
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// use mongoose method Schema to create the structure for the collection "Book" (called 'books' in mongo)
// THe schema defines the columns in the collection (table) and the data type in each column
const portfolioSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  activeFlag: {
    type: Boolean,
    required: false,
  },
  deploymentLink: {
    type: String,
    required: false,
  },
  repoLink: {
    type: String,
    required: true,
  },
});

// create the Book model based on the schema
const Portfolio = mongoose.model("Portfolio", portfolioSchema);

// export the model, which ids the collection to be used in mongoose methods.
module.exports = Portfolio;
