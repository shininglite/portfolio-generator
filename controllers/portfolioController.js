// This file executes mongoose methods and manipulates the database
// uses models in that folder to define which mongo collection to access
// in this case, the model is 'Book', whose schema is  defined in /models/book.js
const db = require("../models");

module.exports = {
  findById: function (req, res) {
    db.Portfolio.findById(req.params.id)
      .then((dbPortfolio) => res.json(dbPortfolio))
      .catch((err) => res.status(422).json(err));
  },
};
