import React from "react";

const RepositoryContext = React.createContext({
  repoName: "",
  repoDesc: "",
  activeFlag: "",
  archiveFlag: "",
  deploymentLink: "",
  html_url: "",
  repoID: "",
});

export default RepositoryContext;
