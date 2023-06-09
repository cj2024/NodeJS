const express = require("express");
const port = 3000;

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<h1> Hello from Express</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
