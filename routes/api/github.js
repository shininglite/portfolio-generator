// this API file defines what happens when routes related to books are called
// requests are passed in from /routes/api/index.js
// the requests are then routed to /controllers/bookController.js
// define the router method from expess Router
const router = require("express").Router();
//  bookController provides the mongoose code for interacting with the database
const portfolioController = require("../../controllers/bookController");

// Matches with "/api/books"
// 2 database calls are made from the landing page - 1 to load a list of books, 1 to add (create) a new book.  Route calls start with "/api/books"
// this route handles "api/books/", calling methods in bookController.js for .get and .po