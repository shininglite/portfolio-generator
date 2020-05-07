# Controllers Folder

Welcome to the Controllers folder. This document is going to describe all the folders/files in the controllers directory. This is one of many different architectures you can use when building any application.

The controllers folder manages ALL data requests to and from your application.

- ## bookController.js file

  The bookController.js manages the methods that makes calls to the database. Database management needs an extra step to identify the schemas. Each controller file that manages database information will use the "models" folder to identify these schemas.

  The models folder will depend on the ORM being used. In this example we are using mongoose as our ORM. The ORM is the "language" (or methods) used to access the database.

  - The ORM "language" (or methods) we use for mongodb database is mongoose
  - The ORM "language" (or methods) we use for mySQL is Sequelize.

Mongoose Example:

```javascript
const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then((dbBook) => res.json(dbBook))
      .catch((err) => res.status(422).json(err));
  },
```

    - We first set up the "db" variable to bring in the models.
    - Set up export.
    - "FindAll" is a mongoose method sending in the "req" information.
    - Then gets back the JSON for the call OR
    - Catches the Error.

- ## googleController.js file

  The googleController.js file manages the methods that makes the calls to the API for Google. The strategy for API calls uses axios.
