import axios from "axios";

export default {

  //

  // Send in the github user name
  getDevData: function (githubUserName) {
    return axios.get("/api/developer/" + githubUserName);
  },

  // Saves the developer data.  You will need to send in the githubID in params and any fields you want to update in the developerData field.  It will update only those you send in.

  updateDeveloper: function (id, developerData) {
    return axios.post("/api/developer/" + id, developerData);
  },

  // Call this function to find the active Developer.  You do not need to pass anything in.  If none are active, it is not setup yet.

  getActiveDeveloper: function () {
    return axios.get("/api/developer/active/get");
  },

  // Saves the developer data.  You will need to send in the githubID in params and any fields you want to update in the developerData field (This is one to many)

  updateRepositories: function (id, repositoriesData) {
    return axios.post("/api/repositories/" + id, repositoriesData);
  },

};
