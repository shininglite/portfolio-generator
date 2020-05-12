const router = require("express").Router();
const developerController = require("../../controllers/developerController");

// Find the Developer passing in the github username.
router.route("/:githubID").get(developerController.findDeveloper);

// Update the Developer passing in the github username.
router.route("/:githubID").post(developerController.updateDeveloper);

module.exports = router;
