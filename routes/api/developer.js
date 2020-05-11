const router = require("express").Router();
const developerController = require("../../controllers/developerController");
//
console.log('5. in /routes/api/developer.js server side')
router.route("/:id").get(developerController.findById);

module.exports = router;
