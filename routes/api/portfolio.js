const router = require("express").Router();
//  bookController provides the mongoose code for interacting with the database
const portfolioController = require("../../controllers/portfolioController");

// Matches with "/api/books"
// 2 database calls are made from the landing page - 1 to load a list of books, 1 to add (create) a new book.  Route calls start with "/api/books"
// this route handles "api/books/", calling methods in portfolioController.js for .get and .post requests
router.route("/").get(portfolioController.findAll).post(portfolioController.create);

// Matches with "/api/books/:id"
// this route handles "/api/books/:id", calling methods in portfolioController specific to a single book
// via the 'id' sent with the call.  The get request retrieves data on a specific book, the
// put request modifies data, and delete removes a book from the database.
router
  .route("/:id")
  .get(portfolioController.findById)
  .put(portfolioController.update)
  .delete(portfolioController.remove);

// export the routes for use in other modules
module.exports = router;
