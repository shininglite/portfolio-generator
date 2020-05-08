const path = require("path");
const router = require("express").Router();

// push all api routes here.
const apiRoutes = require("./api");
const utilRoutes = require("./util");

// use these routes.
router.use("/api", apiRoutes);
router.use("/util", apiRoutes);

// If no API routes are hit, send the React app (landing page)
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
