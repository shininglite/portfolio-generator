# Models Folder

Welcome to the Models folder. This document is going to describe all the folders/files in the Models directory. This is one of many different architectures you can use when building any application.

The Models folder manages ALL database schemas or collections. _(NOTE: This needs to be done with mySQL and Mongodb databases.)_

- ## index.js file

  This will manage the ability to export ALL models with a single "require" statement.

- ## book.js file
  This will set up the schema (aka collections) for the database "book".

```javascript
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
```

- Brings in the mongoose "language" (or methods)
- Creates a new mongoose schema.
- Sets the attributes and attributes of the attributes.
- Sets up the name of the model.
- Then exports.
