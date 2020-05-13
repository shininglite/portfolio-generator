const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  // Get the active developer
  findActiveDeveloper: function (req, res) {
    db.Developer.findOne({ active: true })
      .populate("repositories")
      .exec((err, dbDeveloper) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(dbDeveloper);
        }
      });
  },
  //  When calling for "devDate", we will alway need the github user id.
  updateDevData: function (req, res) {
    updateDeveloper(req.body);
    updateRepository(req.body);
  },
};

function updateDeveloper(devData) {
  if (devData) {
    let developerData = {
      developerLoginName: devData.developerLoginName,
      developerGithubID: devData.developerGithubID,
      fname: devData.fname,
      lname: devData.lname,
      email: devData.email,
      active: devData.active,
    };
    db.Developer.insertMany(developerData);
  }
}

function updateRepository(devData) {
  if (devData) {
    let repoDevData = {
      repoName: repo.name,
      repoDesc: repo.description,
      activeFlag: false,
      archiveFlag: false,
      deploymentLink: "",
      html_url: repo.html_url,
      repoID: repo.id,
    };
    db.Repository.insertMany(developerData);
  }
}
