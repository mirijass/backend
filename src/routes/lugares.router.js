const{Router}= require('express');

const router= Router();

const lugaresCtrl= require('../controllers/lugares.controller');


router.get('/lugares/:id', lugaresCtrl.getLugares);

router.get('/lugares', lugaresCtrl.getLugares);

router.post('/lugares', usuariosCtrl.createLugares);

router.delete('/lugares/:id', lugaresCtrl.deleteLugares);

router.put('/lugares/:id', lugaresCtrl.editLugares);

module.exports= router;