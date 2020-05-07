const path = require("path");
const router = require("express").Router();

// Route to APIs by data source
const githubRoutes = require("./github");
const portfolioRoutes = require("./portfolio");

router.use("/github", githubRoutes);
router.use("/portfolio", portfolioRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
