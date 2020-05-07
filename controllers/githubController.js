// This file executes mongoose methods and uses axios to access the google books API
// use the axios npm package to make calls to an external API
const axios = require("axios");
// use mongoose methods to access the database, using the models (schemas) in the /models folder
// by default, looks for /models/index.js 
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
// this mongoose method 'findAll' uses a function to create an axios request to the google books API
// including data (params) in the request (req)
// The first .then filters the returning data get the title, author, link, description and image URL 
// The second .then filters the database and filters out the books that are already in the database
module.exports = {
  findAll: function (req, res) {
    const { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
