const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action=/product method=POST><input type=text name=title><input type=text name=size><button type=submit>Add Product</button></form>"
  );
});

app.post("/product", (req, res) => {
  const { title, size } = req.body;
  console.log("Title :", title, ",", "Size :", size);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1> Hello from Express</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

