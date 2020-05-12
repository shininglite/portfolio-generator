let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/portfolio_db", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

console.log("here");

db.Developer.update(
  { developerLoginName: "srfrog1970" },
  {
    $set: {
      fname: "Shawnnnn",
    },
  }
).exec((err, dbDeveloper) => {
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

// devTest = db.Developer.findOne({
//   developerLoginName: "srfrog1970",
// })
//   .populate("repositories")
//   .exec((err, dbDeveloper) => {
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
