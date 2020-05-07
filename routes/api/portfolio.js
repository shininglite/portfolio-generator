const router = require("express").Router();
const portfolioController = require("../../controllers/portfolioController");

router.route("/").get(portfolioController.findAll);

module.exports = router;
