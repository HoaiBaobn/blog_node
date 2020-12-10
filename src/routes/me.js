const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeControllers"); //controller

router.get("/stored/blog", meController.storeBlog);

module.exports = router;
