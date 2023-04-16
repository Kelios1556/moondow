var express = require('express');
var router = express.Router();

router.post('/login', function(req, res) {
  var db = req.db;
  var sql = 'SELECT * FROM accounts WHERE name= ? and password = ?';

  var username = req.body.username;
  var password = req.body.password;

  db.query(sql, [username, password], function(err, re) {
    if (JSON.parse(JSON.stringify(re)).length > 0) {
      res.send();
      console.log("afknweofwf");
    } else {
      console.log("193410394104");
    }
  });
});


module.exports = router;
