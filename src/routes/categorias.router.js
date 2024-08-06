const{Router}= require('express');

const router= Router();

const categoriasCtrl= require('../controllers/categorias.controller');


router.get('/categorias/:id', categoriasCtrl.getCategoria);

router.get('/categorias', categoriasCtrl.getCategorias);

router.post('categorias', categoriasCtrl.createCategoria);

router.delete('/categorias/:id', categoriasCtrl.deleteCategoria);

router.put('/categorias/:id', categoriasCtrl.editCategoria);



module.exports= router;
