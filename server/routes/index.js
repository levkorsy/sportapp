var express = require("express");
var router = express.Router();
var gamesController = require("../controllers/gamesController");
/* GET All football games. */
router.get("/", gamesController.getAllFootballgames);

/* GET All basketball games. */
router.get("/basketball", gamesController.getAllBasketballgames);

/* POST new comment. */
router.post("/", gamesController.postNewComment);

module.exports = router;
