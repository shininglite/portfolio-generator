const router = require("express").Router();
const developerController = require("../../controllers/developerController");
//
router.route("/:id").get(developerController.findById);

module.exports = router;
