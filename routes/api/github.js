const router = require("express").Router();
const portfolioController = require("../../controllers/githubController");

//
router.route("/:id").get(githubController.findById);

module.exports = router;
