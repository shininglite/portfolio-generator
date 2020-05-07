# Root Folder

    Welcome to the root folder. This document is going to describe all the folders/files in the root directory. This is one of many different architectures you can use when building any application.

- ## Client Folder

  The client folder is the folder that is used by all client side processing. It is important to note that this folder contains all code that is viewable by the end user. If you have any proprietary code, it should not be in this folder. It is generally used to navigate pages.

- ## Controllers Folder

  The controller folder is used to create methods for your CRUD (Create, Read, Update, Delete) operations to your databases. It is also used to manage API calls.

- ## Models Folder

  The Models folder is used to manage the database schema.

- ## node_modules Folder

  This is your third party library folder. All installs will go here as well as their dependencies for server side processing.

- ## Routes Folder

  The routes folder manages the server side routes. This includes sending back HTML routes and calls to the methods in your controller folder.

- ## .gitignore File

  A gitignore file specifies intentionally untracked files that Git should ignore.

  Each line in a gitignore file specifies a pattern. When deciding whether to ignore a path, Git normally checks gitignore patterns from multiple sources, with the following order of precedence, from highest to lowest (within one level of precedence, the last matching pattern decides the outcome) (https://git-scm.com/docs/gitignore)

- ## package-lock.json File

  package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates. (https://docs.npmjs.com/configuring-npm/package-lock-json.html)

- ## package.json File

  package.json file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. (https://docs.npmjs.com/files/package.json)

- ## server.js File

  This is where the magic begins!

  We will set up high level setting for your application. This includes but is not limited to:

  - Application name (Usually "app")
  - Set ups the Port to which the application is listening
  - Set ups the Middleware such as body parsing for AJAX requests
  - Set ups the Static assets
  - Set ups the The routes for API calls and views (HTML)
  - Connects to database
  - And then finally set the port to start listening.
