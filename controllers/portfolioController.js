// This file executes mongoose methods and manipulates the database
// uses models in that folder to define which mongo collection to access
// in this case, the model is 'Book', whose schema is  defined in /models/book.js
const db = require("../models");

// Defining methods for the bookController
// for each method, data in the request (req) is passed in, and  .then defines what to do with the response (res)
// .catch provide error handlind without breaking the app
module.exports = {
  findAll: function (req, res) {
    db.Portfolio.find(req.query)
      .then((dbPortfolio) => res.json(dbPortfolio))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Portfolio.findById(req.params.id)
      .then((dbPortfolio) => res.json(dbPortfolio))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Portfolio.create(req.body)
      .then((dbPortfolio) => res.json(dbPortfolio))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Portfolio.findOneAndUpdate({ id: req.params.id }, req.body)
      .then((dbPortfolio) => res.json(dbPortfolio))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Portfolio.findById(req.params.id)
      .then((dbPortfolio) => dbPortfolio.remove())
      .then((dbPortfolio) => res.json(dbPortfolio))
      .catch((err) => res.status(422).json(err));
  },
};
