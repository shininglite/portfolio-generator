// require the npm package mongoose, which has methods to manipulate mongo databases
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// use mongoose method Schema to create the structure for the collection "Book" (called 'books' in mongo)
// THe schema defines the columns in the collection (table) and the data type in each column
const repositoriesSchema = new Schema({
  repoName: {
    type: String,
    required: true,
  },
  repoDesc: {
    type: String,
    required: true,
  },
  activeFlag: {
    type: Boolean,
    required: false,
  },
  archiveFlag: {
    type: Boolean,
    required: false,
  },
  deploymentLink: {
    type: String,
    required: false,
  },
  html_url: {
    type: String,
    required: true,
  },
  repoID: {
    type: Number,
    required: true,
  },
});

// create the Book model based on the schema
const Repositories = mongoose.model("Repositories", repositoriesSchema);

// export the model, which ids the collection to be used in mongoose methods.
module.exports = Repositories;
