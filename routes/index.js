var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {
    status:0,
    errno:100,
    data:'111111111'
  }
  res.json(data)
  // res.render('index', { title: 'Express' });
});

module.exports = router;
