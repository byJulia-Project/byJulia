var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('painel-do-usuário', { title: 'usuário', nomePagina: 'painel-do-usuário'});
});


module.exports = router;