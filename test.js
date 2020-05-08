let mongoose = require("mongoose");
let db = require("./models");
let axios = require("axios");
// let testRoute = require("./routes");

function updateDevDB(developerLoginName) {
  // axios
  //   .get("/api/developer/updateDevDB", {
  //     params: { developerLoginName: developerLoginName },
  //   })
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));
  var gitHubData;
  axios
    .get(
      "https://api.github.com/search/repositories?q=user:" + developerLoginName
    )
    .then((data) => {
      gitHubData = data;
    })
    .then(() => {
      return db.Developer.findOne({ developerLoginName: developerLoginName });
    })
    .then((devData) => {
      loadDB(devData, gitHubData);
    })
    .catch((err) => console.log(err));
}
mongoose.connect("mongodb://localhost/portfolio_db", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

function loadDB(devData, gitHubData) {
  //
  if (!gitHubData) {
    return;
  } else {
    if (!devData) {
      let devData = {
        developerLoginName: gitHubData.data.items[0].owner.login,
        developerGithubID: gitHubData.data.items[0].owner.id,
      };
      db.Developer.insertMany(devData);
    }

    gitHubData.data.items.forEach((repo) => {
      // db.Repository.findOne({ repoID: repo.id }).catch(

      // )
      updateRepo(repo, gitHubData.data.items[0].owner.id);
    });
  }
}

function updateRepo(repo, devID) {
  if (!repo.description) {
    repo.description = repo.name;
  }
  let repoDevData = {
    repoName: repo.name,
    repoDesc: repo.description,
    activeFlag: false,
    deploymentLink: "",
    html_url: repo.html_url,
    repoID: repo.id,
  };
  db.Repository.insertMany(repoDevData).then((repoArray) => {
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
// updateDevDB("srfrog1970");
updateDevDB("frunox");

// async function getDev(devGithubID) {
//   //
//   await db.Developer.findOne({ developerLoginName: devGithubID }).then(
//     (devArray) => {
//       console.log(devArray);
//     }
//   );
//   await db.Developer.findOne({ developerLoginName: devGithubID }).then(
//     (devArray) => {
//       console.log(devArray);
//     }
//   );
// }

// mongoose.connect("mongodb://localhost/portfolio_db", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });

// async function getDev(devGithubID) {
//   // find the dev
//   console.log("devGithubID", devGithubID);
//   // TODO: Why doesnt the callback work?
//   await db.Developer.findOne({ developerLoginName: devGithubID }, (devData) => {
//     //
//     console.log("hi");
//     //
//     if (devData) {
//       console.log(devData);
//       // get repository data
//       //   const repos = axios.get("/api/google", { params: devData._id });
//     } else {
//       console.log("nope", devData);
//     }
//   });
//   console.log("end");
// }
