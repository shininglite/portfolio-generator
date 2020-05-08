# utils Folder

    Welcome to the utils folder. This document is going to describe all the folders/files in the utils directory. This is one of many different architectures you can use when building any application.

    The utils folder is where you will manage your API calls.

## API.js File

    The API.js File is where you make all your front end API calls.  All these calls are using axios.  I believe axios is the link from our client side to our server side.  When using axios, it will take in the request and go to your "routes" folder on your server side and load the API route there returning the results.

```javascript
import axios from "axios";

export default {
// Gets books from the Google API
getBooks: function (q) {
return axios.get("/api/google", { params: { q: "title:" + q } });
},
```

    - We import axios
    - We set up out export default
    - create a method called "getBooks" (Which is called in the pages folder where we have stateful components)
    - using axios (with the method aka .get, .delete, .post, etc.) send in the request.
    - and return that request.
