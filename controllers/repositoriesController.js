const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  //
  // Save the Repository information with whatever fields are sent in

  updateRepositories: function (req, res) {
    db.Repositories.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    ).exec((err, dbRepository) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(dbRepository);
      }
    });
  },
};
