const express = require("express");
const router = express.Router();

const indexController = require("../controller/indexController");

router.get("/", indexController.getIndex);
router.post("/submit", indexController.insertConfirmation);

module.exports = router;
