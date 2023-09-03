const express = require("express");
const router = express.Router();

const confirmationController = require("../controller/confirmationController");

router.get("/confirmation", confirmationController.getConfirmation);

module.exports = router;
