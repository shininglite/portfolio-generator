import axios from "axios";

export default {
  //

  // Send in the github user name
  getActiveDevData: function () {
    return axios.get("/api/devData/activeDevData/");
  },

  // Saves the developer data.  You will need to send in the githubID in params and any fields you want to update in the developerData field.  It will update only those you send in.

  updateDeveloper: function (id, developerData) {
    return axios.post("/api/developer/" + id, developerData);
  },

  // Call this function to find the active Developer.  You do not need to pass anything in.  If none are active, it is not setup yet.

  getActiveDeveloper: function () {
    console.log('/src/utils/API.js  getActiveDeveloper')
    return axios.get("/api/devData/active");
  },

  // Saves the developer data.  You will need to send in the githubID in params and any fields you want to update in the developerData field (This is one to many)

  updateRepositories: function (id, repositoriesData) {
    return axios.post("/api/repositories/" + id, repositoriesData);
  },

  // Call this function to find the active Developer.  You do not need to pass anything in.  If none are active, it is not setup yet.

  getsync: function (githubID) {
    return axios.post("/util/sync/" + githubID);
  },
};
