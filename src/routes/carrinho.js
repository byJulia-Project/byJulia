var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pagina-carrinho', {title:"cesta-de-produtos"});
});

module.exports = router;
