import React from "react";

//  This should be a complete record of everything to/from the database. I do not think I need anything else.  We should read to this state rightaway and use it to read/write to the data database.
const DevDataContext = React.createContext({});

// const DevDataContext = React.createContext({
//   developerLoginName: "",
//   developerGithubID: "",
//   lname: "",
//   fname: "",
//   email: "",
//   active: true,
//   repositories: [],
//   displayRepos: [],
// });

export default DevDataContext;
