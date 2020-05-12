const path = require("path");
const router = require("express").Router();

// Route to APIs by data source TODO: I think we should set up a route for each collection.
const developerRoutes = require("./developer");
const repositoriesRoutes = require("./repositories");
const devDataRoute = require("./devData");

router.use("/developer", developerRoutes);

router.use("/repositories", repositoriesRoutes);
//
// This route is to update (and create) a Developer with their github repositories.
// (Write out the first developer and repository data together)
router.use("/devData", devDataRoute);
//



// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/scr/index.html"));
});

module.exports = router;
