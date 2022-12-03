var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.render('produtos', { title: 'Express' });
});

router.get('/produtos', function(req, res, next){
  res.render('produtos', {title: 'Produtos',})
});

module.exports = router;