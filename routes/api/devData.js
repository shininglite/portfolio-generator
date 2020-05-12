const router = require("express").Router();
const devDataController = require("../../controllers/devDataController");

router.route("/devData").get(devDataController.updateDevData);

module.exports = router;
