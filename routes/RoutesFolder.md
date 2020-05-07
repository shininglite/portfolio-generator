# Routes Folder

Welcome to the routes folder. This document is going to describe all the folders/files in the route directory. This is one of many different architectures you can use when building any application.

- ## Index.js file

  This file is used to route ALL the requests coming in (both API and HTML). This strategy uses the "express" library to help route all calls. You can put HTML calls in this folder, however, the only one that is being served is the default home page for our react application. This is a catch all in case a route is called that is not set up.

  This also uses the strategy of "router.use". This allows us to route all calls if the string matches what is sent in. For example, we set...

  ```javascript
  router.use("/api", apiRoutes);
  ```

  To route all API type calls to the API Folder. This way we have all our API calls in one folder.

- ## api folder

  This folder will track all of our API calls. An API can be considered requests coming in to access data. This includes data from your database or from an outside source.
