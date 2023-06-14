const path = require("path");
const express = require("express");

const contactController = require("../controllers/contact");

const router = express.Router();

router.get("/contactus", contactController.contactUs);

module.exports = router;
