const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action= /admin/add-product method=POST><input type=text name=title><input type=text name=size><button type=submit>Add Product</button></form>"
  );
});

router.post("/add-product", (req, res) => {
  const { title, size } = req.body;
  console.log("Title :", title, ",", "Size :", size);
  res.redirect("/");
});

module.exports = router;
