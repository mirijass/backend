const{Router}= require('express');

const router= Router();

const usuariosCtrl= require('../controllers/usuarios.controller');


router.get('/usuarios/:id', usuariosCtrl.getUsuario);

router.get('/usuarios', usuariosCtrl.getUsuarios);

router.post('/usuarios', usuariosCtrl.createUsuario);

router.delete('/usuarios/:id', usuariosCtrl.deleteUsuario);

router.put('/usuarios/:id', usuariosCtrl.editUsuario);

module.exports= router;