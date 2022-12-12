var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.render('produtos', {title:"todos-os-produtos", nomePagina:'pagina-produtos'});
});

module.exports = router;

