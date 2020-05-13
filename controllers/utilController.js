const db = require("../models");
const mongoose = require("mongoose");
const axios = require("axios");

module.exports = {
  // Synch the databases -Notes are in the function.
  syncDatabase: function (req, res) {
    const developerLoginName = req.params.id;
    updateDevDB(developerLoginName);
    return true;
  },
};
//
// This is the function that will take in a github user name and synch the local database.
//
// NOTE: This will only update new repositories (and initialize the developer).  It will not overwrite the database values (except when deleted from github).  This function will initialize the "developer" collection (if there is a valid github id) and add only NEW repositories to the local database.

// If a user deletes a repository on github.  Currently, this will make the repository attribute "archive" to true and "active" for false.  TODO: It would be nice if we could have a form that shows all archived items.

function updateDevDB(developerLoginName) {
  var gitHubData;
  var devData;

  // Get the github user and repository data.
  axios
    .get(
      "https://api.github.com/search/repositories?q=user:" + developerLoginName
    )
    // Set gitHubData to the returned data.  TODO: I thought this line of code would work?
    // .then((gitHubData) => {})
    .then((data) => {
      gitHubData = data;
    })
    // Find the developers github login in our database.
    .then(() => {
      return db.Developer.findOne({ developerLoginName: developerLoginName });
    })
    // Take the devData and gitHubData and call loadDB to synch Databases.
    .then((devData) => {
      loadDB(devData, gitHubData);
    })
    .catch((err) => res.json("Github user not found"));
}

function loadDB(devData, gitHubData) {
  //  If there is no github data then return (TODO: Ask about sending errors.  This will be needed for initialization)
  if (!gitHubData) {
    return res.json("Github user not found");
  } else {
    // If there is no devData (the user was not found in our database), set them up and insert the data.
    //  Here is where we will add new data needed from the github repository.
    if (!devData) {
      //NOTE: I had the line " let devData = {..." before initializing devData with a "let" statement. HOWEVER, I only had access to this this variable inside the scope of he function...  I learned this the hard way!
      var devData = {
        developerLoginName: gitHubData.data.items[0].owner.login,
        developerGithubID: gitHubData.data.items[0].owner.id,
        lname: "",
        fname: "",
        email: "",
        active: true,
        repositories: [],
      };
      db.Developer.insertMany(devData);
    }
    var githubRepoArray = [];
    // Loop through each github repository item and load all new records.
    gitHubData.data.items.forEach((repo) => {
      githubRepoArray.push(repo.id);
      updateRepo(repo, gitHubData.data.items[0].owner.id);
    });

    archiveRepositories(devData, githubRepoArray);
    // loop through our database repository items.
  }
}

//  This will loop through our local database and update any repositories that were delete on github.  We will make these inactive and archived (activeFlag: false, archiveFlag: true)
function archiveRepositories(devData, githubRepoArray) {
  devData.repositories.forEach((repositiesID) => {
    db.Repositories.findById(repositiesID).exec((err, repositiesData) => {
      // If the repoID is not null, find it in the github array of repos.
      if (err) {
        return res.json(err);
      }
      if (repositiesData.repoID) {
        indexNum = githubRepoArray.indexOf(repositiesData.repoID);
        // If you do not find it, delete it.
        // TODO: This needs to be tested!  To test this, add a repository to github.  Make sure the mongodb is up to date.  Delete the github repository.  Sign back into your account (to run this code).  And make sure the mongodb has marked in inactive and the active flag is false.
        if (indexNum < 0) {
          db.Repositories.findOneAndUpdate(
            { _id: repositiesData.repoID },
            {
              $set: {
                archiveFlag: true,
                activeFlag: false,
              },
            }
          ).catch((err) => {
            return res.json(err);
          });
        }
      }
    });
  });
}
//  This will synch the two databases.
function updateRepo(repo, devID) {
  // Set the repo.description to the repo name if it is null (This is a required field)
  if (!repo.description) {
    repo.description = repo.name;
  }
  // Here is where we set up our database's Repository information.
  // If you need to add more to the repository from github, start here.
  var repoDevData = {
    repoName: repo.name,
    repoDesc: repo.description,
    activeFlag: false,
    archiveFlag: false,
    deploymentLink: "",
    html_url: repo.html_url,
    repoID: repo.id,
  };
  // Check to see if there is a record in our database with the github repo id.
  db.Repositories.findOne({ repoID: repo.id }).exec((err, repoData) => {
    // If there is not a record in our database then add it to the repository collection.
    if (!repoData) {
      db.Repositories.insertMany(repoDevData).then((repoArray) => {
        // We also need to add the repository id to the developer .
        db.Developer.findOneAndUpdate(
          { developerGithubID: devID },
          {
            $push: {
              repositories: repoArray.map((element, key) => element._id),
            },
          },
          { new: true }
        ).catch((err) => {
          res.json(err);
        });
      });
    }
  });
}
