# API Folder

Welcome to the API folder. This document is going to describe all the folders/files in the api directory. This is one of many different architectures you can use when building a react application.

- ## index.js file

  This file is used to route ALL the requests with "/api" as the first part of the string. We use the strategy of breaking up the routes even further here by using the

  ```javascript
  router.use("/books", bookRoutes);
  router.use("/google", googleRoutes);
  ```

  to route to specific files. Here, we will have a books file and a google file. The books file will manage all books data and the google file will manage all google data.

  _NOTE: If you are using the require method calling a folder, it will always use the "index.js" file if you do not specify a root folder._

* ## books.js

  The books.js file will manage the CRUD operations for our database books. Since the "Books" data is coming from our database, we will need to call our controllers file to manage the database calls.

* ## google.js

  The google.js file will manage the CRUD operations for our to google data. Since the "Google" data is coming from an external API, we will need to call our controllers file to manage the database calls.
