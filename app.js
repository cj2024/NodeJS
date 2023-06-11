const path = require("path");
const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");

const app = express();

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const contactRoute = require("./routes/contact");
const successRoute = require("./routes/success");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(shopRoute);
app.use(contactRoute);
app.use(successRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

