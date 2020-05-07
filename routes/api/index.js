// all API calls route through this file first (by default)
// load node package path, used to build path names
// require express router
const path = require("path");
const router = require("express").Router();

// Route to API folder
const githubRoutes = require("./github");
const portfolioRoutes = require("./portfolio");

// Book routes -> routes to /routes/api/books.js
router.use("/github", githubRoutes);

// Google Routes -> routes to /routes/api/google.js
router.use("/portfolio", portfolioRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
