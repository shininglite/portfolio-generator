const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  findById: function (req, res) {
    console.log('6. in /controllers/developerController.js server side')
    console.log("ID", req.params.id);
    // TODO: Populate does not work?!?!?
    db.Developer.findOne({ developerLoginName: req.params.id })
      .populate("repositories")
      .exec((err, dbDeveloper) => {
        if (err) {
          console.log("error");
          return res.json(err);
        } else {
          console.log("No error in controller");
          console.log(req.params.id)
          return res.json(dbDeveloper);
        }
      });
    // .then((dbDeveloper) => res.json(dbDeveloper))
    // .catch((err) => res.status(422).json(err));
  },
};
