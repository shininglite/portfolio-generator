const router = require("express").Router();
const devDataController = require("../../controllers/devDataController");

router.route("/").get(devDataController.updateDevData);

router.route("/active").get(devDataController.findActiveDeveloper);

router.route("/activeDevData").get(devDataController.getActiveDevData);

module.exports = router;
