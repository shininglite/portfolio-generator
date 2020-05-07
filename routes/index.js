// require node package path to create path names for routing
const path = require("path");
// require the express router
const router = require("express").Router();
// refer to the /api/ subfolder for api routes.
const apiRoutes = require("./api");

// API Routes
// any routes starting with /api are referenced to the /api subfolder
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app (landing page)
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
