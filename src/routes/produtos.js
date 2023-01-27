const express = require('express');
const router = express.Router();
const ProdutosController = require('../controllers/ProdutosController');

/* GET products listing. */
router.get('/', ProdutosController.listar );                                                  
router.get('/formulario', ProdutosController.formulario );                                                  
router.post('/', ProdutosController.criar);
router.delete('/:id', ProdutosController.deletar);
router.put('/:id', ProdutosController.editar);
// módulo.exports sempre ultimo do arquivo
module.exports = router;
