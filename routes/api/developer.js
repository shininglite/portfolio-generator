const router = require("express").Router();
const developerController = require("../../controllers/developerController");

// Find the Developer passing in the github username.
router.route("/:githubID").get(developerController.findDeveloper);

// Update the Developer passing in the github username.
router.route("/:githubID").post(developerController.updateDeveloper);

// Finds the (hopefully only one) Developer collection with an active flag.
router.route("/active/get").get(developerController.findActiveDeveloper);

module.exports = router;
