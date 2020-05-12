const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  //
  // Find the Developer by github login ID.

  findDeveloper: function (req, res) {
    db.Developer.findOne({ developerLoginName: req.params.id })
      .populate("repositories")
      .exec((err, dbDeveloper) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(dbDeveloper);
        }
      });
  },

  // Find the active developer

  findActiveDeveloper: function (req, res) {
    console.log("here");
    db.Developer.findOne({ active: true })
      .populate("repositories")
      .exec((err, dbDeveloper) => {
        if (err) {
          console.log("Nope");
          return res.json(err);
        } else {
          console.log("got it");
          return res.json(dbDeveloper);
        }
      });
  },

  // Update the Developer
  updateDeveloper: function (req, res) {
    db.Developer.updateOne(
      { developerLoginName: req.params.id },
      {
        $set: req.body,
      }
    ).exec((err, dbDeveloper) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(dbDeveloper);
      }
    });
  },
};
