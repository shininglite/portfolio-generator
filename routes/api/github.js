const router = require("express").Router();
const githubController = require("../../controllers/githubController");

//
router.route("/:id").get(githubController.findById);

module.exports = router;
