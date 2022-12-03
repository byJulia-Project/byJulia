var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/trabalhe-conosco', function(req, res, next) {
  res.render('pagina-trabalhe-conosco', { title: 'Express', nomePagina:'trabalhe-conosco' });
});
module.exports = router;

