// require the npm package mongoose, which has methods to manipulate mongo databases
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// use mongoose method Schema to create the structure for the collection "Book" (called 'books' in mongo)
// THe schema defines the columns in the collection (table) and the data type in each column
const portfolioSchema = new Schema({

  user: { type: String, required true},
  // password: {type: String, re}


  // Example schema 
  // title: { type: String, required: true },
  // subtitle: { type: String },
  // authors: { type: [String], required: true },
  // link: { type: String, required: true },
  // description: { type: String, required: true },
  // image: { type: String, required: true },
  // googleId: { type: String, required: true, unique: true }
});

// create the Book model based on the schema
const Portfolio = mongoose.model("Portfolio", portfolioSchema);

// export the model, which ids the collection to be used in mongoose methods.
module.exports = Portfolio;
