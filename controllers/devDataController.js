const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  // Get the active developer
  findActiveDeveloper: function (req, res) {
    db.Developer.findOne({
      active: true,
    })
      .populate("repositories")
      .exec((err, dbDeveloper) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(dbDeveloper);
        }
      });
  },

  getActiveDevData: function (req, res) {
    db.Developer.findOne({
      active: true,
    })
      .populate("repositories")
      .exec((err, dbDeveloper) => {
        if (err) {
          return res.json(err);
        } else {
          console.log("here");
          if (dbDeveloper) {
            dbDeveloper.repositories = dbDeveloper.repositories.filter(
              (repository) => repository.activeFlag == "true"
            );
          }
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
// TODO: Does not work.  Do not need this yet but I may need to loop through the devData.repositories and write out each individually?
function updateRepository(devData) {
  if (devData) {
    let repoDevData = {
      repoName: devData.name,
      repoDesc: devData.description,
      activeFlag: false,
      archiveFlag: false,
      deploymentLink: "",
      html_url: devData.html_url,
      repoID: devData.id,
    };
    db.Repository.insertMany(repoDevData);
  }
}
