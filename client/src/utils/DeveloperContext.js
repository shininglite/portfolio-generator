import React from "react";

// This is the Developer record.  This contains all repos.
const DeveloperContext = React.createContext({
  developerLoginName: "",
  developerGithubID: "",
  lname: "",
  fname: "",
  email: "",
  active: true,
  repositories: [],
});

export default { DeveloperContext };
