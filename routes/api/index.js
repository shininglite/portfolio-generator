const path = require("path");
const router = require("express").Router();

// Route to APIs by data source
const githubRoutes = require("./github");
const developerRoutes = require("./developer");

router.use("/github", githubRoutes);
router.use("/developer", developerRoutes);
console.log('4. in /routes/api/index.js server side')
// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/scr/index.html"));
});

module.exports = router;
