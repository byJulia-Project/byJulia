var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pagina-produtos', {title:"todos-os-produtos", nomePagina:'pagina-produtos'});
});

module.exports = router;
