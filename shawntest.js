let mongoose = require("mongoose");
let db = require("./models");

mongoose.connect("mongodb://localhost/portfolio_db", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

console.log("here");
devTest = db.Developer.findOne({
  developerLoginName: "srfrog1970",
})
  .populate("repositories")
  .exec((err, dbDeveloper) => {
    console.log("there");
    if (err) {
      console.log("Error Route");
      console.log("Error: ", err);
      console.log("Developer:", dbDeveloper);
      process.exit(1);
      return;
    } else {
      console.log("Non Error Route");
      console.log("Error: ", err);
      console.log("Developer:", dbDeveloper);
      process.exit(1);
      return;
    }
  });

//   .populate("Repositories")

//   .then((err, dbDeveloper) => {
//     console.log("there");
//     if (err) {
//       console.log("Error Route");
//       console.log("Error: ", err);
//       console.log("Developer:", dbDeveloper);
//       process.exit(1);
//       return;
//     } else {
//       console.log("Non Error Route");
//       console.log("Error: ", err);
//       console.log("Developer:", dbDeveloper);
//       process.exit(1);
//       return;
//     }
//   });
///////////////////////////

// console.log("here");
// const devData = db.Developer.findOne(
//   {
//     developerLoginName: "srfrog1970",
//   },
//   (err, dbDeveloper) => {
//     console.log(dbDeveloper.repositories);
//     process.exit(1);
//   }
// );

// console.log("here");
// const dev = db.Developer.findOne({
//   developerLoginName: "srfrog1970",
// });
// dev.populate("Repositories").execPopulate();
// console.log(dev);
