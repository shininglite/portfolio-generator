const router = require("express").Router();
const developerController = require("../../controllers/developerController");
// ("/:id");
router.route("/:id").get(developerController.findById);

module.exports = router;
