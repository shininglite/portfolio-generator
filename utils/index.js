const router = require("express").Router();
const utilController = require("../controllers/utilController");

// (With the github user ID), call to synch github with the local database.
router.route("/synch").post(utilController.synchDatabase);

module.exports = router;
