var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "games_db"
});

class gamesController {
  static getAllFootballgames(req, res) {
    connection.query(
      //   "SELECT * FROM games INNER JOIN comments ON comments.game_id = games.id WHERE Category ='Football'",

      "SELECT * FROM games WHERE Category ='Football'",
      function(err, rows, fields) {
        if (err) throw err;
        console.log("The solution is: ", rows);
        res.send(rows);
      }
    );
  }

  static getAllBasketballgames(req, res) {
    connection.query(
      // "SELECT * FROM games INNER JOIN comments ON comments.game_id = games.id WHERE Category ='Basketball'",
      "SELECT * FROM games WHERE Category ='Basketball'",
      function(err, rows, fields) {
        if (err) throw err;
        console.log("The solution is: ", rows);
        res.send(rows);
      }
    );
  }

  static postNewComment(req, res) {
   

    var sql = `INSERT INTO comments (game_id, user_name, comment) VALUES ('${
      req.query.gameId
    }', '${req.query.userName}', '${req.query.comment}')`;

    // console.log(sql);

    connection.query(sql, function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  }
}

module.exports = gamesController;
