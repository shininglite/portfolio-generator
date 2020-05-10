let mongoose = require("mongoose");
let db = require("./models");
let axios = require("axios");

mongoose.connect("mongodb://localhost/portfolio_db", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
// The function updateDevDB takes in an argument called "developerLoginName".
// This is the users github login id.
function updateDevDB(developerLoginName) {
  var gitHubData;

  // Get the github user and Repositories data.
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
    .catch((err) => console.log(err));
}

function loadDB(devData, gitHubData) {
  //  If there is no github data then return (TODO: Ask about sending errors)
  if (!gitHubData) {
    return;
  } else {
    // If there is no devData (the user was not found in our database), set them up and inset the data.
    //  Here is where we will add new data needed from the github Repositories.
    if (!devData) {
      let devData = {
        developerLoginName: gitHubData.data.items[0].owner.login,
        developerGithubID: gitHubData.data.items[0].owner.id,
        repositories: [],
      };
      db.Developer.insertMany(devData);
    }
    var githubRepoArray = [];
    // Loop through each github Repositories item and synch databases.
    gitHubData.data.items.forEach((repo) => {
      githubRepoArray.push(repo.id);
      updateRepo(repo, gitHubData.data.items[0].owner.id);
    });
    // loop through our database Repositories items.
    devData.repositories.forEach((repositiesID) => {
      db.Repositories.findById(repositiesID).exec((err, repositiesData) => {
        // If the repoID is not null, find it in the github array of repos.
        if (err) {
          return err;
        }
        if (repositiesData.repoID) {
          indexNum = githubRepoArray.indexOf(repositiesData.repoID);
          // If you do not find it, delete it.
          if (indexNum < 0) {
            // Update the Repositories with the "archiveFlag" set to true and active set to false
            console.log("repositiesID:", repositiesID);
            db.Repositories.findByIdAndUpdate(
              { _id: repositiesID },
              {
                $set: {
                  activeFlag: false,
                  archiveFlag: true,
                  deploymentLink: "",
                },
              },
              // TODO: Why do you have to have return function for this to work!  If you comment out the return function, it will not work
              function (err, result) {
                if (err) {
                  return err;
                }
              }
            );
          }
        }
      });
    });
  }
}
//  This will synch the two databases.
function updateRepo(repo, devID) {
  // Set the repo.description to the repo name if it is null (This is a required field)
  if (!repo.description) {
    repo.description = repo.name;
  }
  // Here is where we set up our database's Repositories information.
  // If you need to add more to the Repositories from github, start here.
  let repoDevData = {
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
    // If there is not a record in our database then add it to the Repositories collection.
    if (!repoData) {
      db.Repositories.insertMany(repoDevData).then((repoArray) => {
        // We also need to add the Repositories id to the developer .
        db.Developer.findOneAndUpdate(
          { developerGithubID: devID },
          {
            $push: {
              repositories: repoArray.map((element, key) => element._id),
            },
          },
          { new: true }
        ).catch((err) => {
          console.error(err);
          process.exit(1);
        });
      });
    }
  });
}
updateDevDB("srfrog1970");
