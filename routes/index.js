const path = require("path");
const router = require("express").Router();

// Initialize API routes.
const apiRoutes = require("./api");
const utilRoutes = require("../utils");

// NOTE: The only  routes I have seen is a "api", "html" and "util" routes.  Since we are using react, we do not need html routes?

// Call API routes.

console.log("Route/index/");
router.use("/api", apiRoutes);

// Call utils routes.  The only currently here is the "synch" (to synch github with your database)
console.log("Made it to the main routes folder");
router.use("/util", utilRoutes);

// If no API routes are hit, send the React app (landing page)
console.log("HEY!");
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/scr/index.html"))
);

module.exports = router;
