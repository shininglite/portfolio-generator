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
      console.log("Hit githubAPI");
      gitHubData = data;
    })
    .then(() => {
      console.log("About to read db");
      return db.Developer.findOne({ developerLoginName: developerLoginName });
    })
    .then((devData) => {
      console.log("read db and then...");
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
  console.log(devData);
  gitHubData.data.items.forEach((repo) => {
    let githubID = repo.id;
    console.log(githubID);
    console.log(devData);
  });
}
updateDevDB("srfrog1970");

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
