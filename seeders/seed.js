let mongoose = require("mongoose");
let db = require("../models");

// TODO: I think the connection is an async call and we need to wait (doesn't work the first time you run it.)
mongoose.connect("mongodb://localhost/portfolio_db", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

let developerSeed = {
  developerLoginName: "srfrog1970",
  developerGithubID: "32324098",
  fname: "Shawn",
  lname: "Hayes",
  lemail: "shawn@email.com",
  active: true,
};

let repositorySeed = [
  {
    repoName: "Password Generator",
    repoDesc: "A Password Generator program",
    activeFlag: false,
    archiveFlag: false,
    deploymentLink: "https://deploymentlink6",
    html_url: "https://htmlURL6",
    repoID: "245070311",
  },
];

async function queryDatabase(developerSeed, repositorySeed) {
  // Insert the developer
  await db.Developer.insertMany(developerSeed).then(async (devArray) => {
    // insert the repositories
    await db.Repositories.insertMany(repositorySeed).then(async (repoArray) => {
      // Find the developer and push the array of repository ids.
      // TODO: devArray is available because it is a "Upper" level function?  And again available in the findOneAndUpdate function because it is a "Upper" level function?  Same with devID.
      devID = devArray[0]._id;
      await db.Developer.findOneAndUpdate(
        { _id: devID },
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
  });

  // insert the repository with a callback function
}

async function initSeeds() {
  db.Repositories.deleteMany({}, () => "");
  db.Developer.deleteMany({}, () => "");
  await queryDatabase(developerSeed, repositorySeed);
  process.exit(0);
}

initSeeds();
