const db = require("../models");

module.exports = {
  findById: function (req, res) {
    // compare info
    db.Developer.find()
      .then((dbDeveloper) => res.json(dbDeveloper))
      .catch((err) => res.status(422).json(err));
  },
};
