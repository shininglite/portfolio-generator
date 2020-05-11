const path = require("path");
const router = require("express").Router();

// push all api routes here.
const apiRoutes = require("./api");
// const utilRoutes = require("./util");
console.log('3. in /routes/index.js server side')
// use these routes.
router.use("/api", apiRoutes);
router.use("/util", apiRoutes);

// If no API routes are hit, send the React app (landing page)
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/scr/index.html"))
);

module.exports = router;
