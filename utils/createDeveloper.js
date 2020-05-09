let mongoose = require("mongoose");
let db = require("../models");
let axios = require("axios");

export default {
  getDeveloper: function (devGithubID) {
    // find the dev
    db.Developer.findById(devGithubID, (devData) => {
      if (devData) {
        console.log(devData);
        // get repository data
        //   const repos = axios.get("/api/google", { params: devData._id });
      }
    });
  },
};
