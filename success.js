const path = require("path");
const express = require("express");

const sucessController = require("../controllers/success");

const router = express.Router();

router.get("/success", sucessController.successPage);

module.exports = router;
