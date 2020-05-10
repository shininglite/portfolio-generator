// require the npm package mongoose, which has methods to manipulate mongo databases
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// use mongoose method Schema to create the structure for the collection "Book" (called 'books' in mongo)
// THe schema defines the columns in the collection (table) and the data type in each column
const developerSchema = new Schema({
  developerLoginName: {
    type: String,
    required: true,
  },
  developerGithubID: {
    type: String,
    required: true,
  },
  repositories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Repositories",
    },
  ],
});

// create the Book model based on the schema
const Developer = mongoose.model("Developer", developerSchema);

// export the model, which ids the collection to be used in mongoose methods.
module.exports = Developer;
