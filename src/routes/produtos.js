var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', (req, res) => {
  res.render('produtos', {title:'Produtos', nomePagina:'products'});
});

module.exports = router;
