var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pagina-carrinho', {title:"Carrinho", nomePagina: 'pagina-carrinho'});
});

module.exports = router;
