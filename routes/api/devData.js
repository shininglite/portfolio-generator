const router = require("express").Router();
const devDataController = require("../../controllers/devDataController");

router.route("/").get(devDataController.updateDevData);

router.route("/active").get(devDataController.findActiveDeveloper);

module.exports = router;
