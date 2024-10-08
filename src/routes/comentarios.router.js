const{Router}= require('express');

const router= Router();

const comentariosCtrlsCtrl= require('../controllers/comentarios.controller');
const usuariosCtrl = require('../controllers/usuarios.controller');
const comentariosCtrl = require('../controllers/comentarios.controller');


router.get('/comentarios/:id', comentariosCtrl.getComentario);

router.get('/comentarios', comentariosCtrl.getComentarios);

router.post('/comentarios', comentariosCtrl.createComentario);

router.delete('/comentarios/:id', comentariosCtrlsCtrl.deleteComentario);

router.put('/comentarios/:id', comentariosCtrlsCtrl.editComentario);

module.exports= router;