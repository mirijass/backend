const{Router}= require('express');

const router= Router();

const lugaresCtrl= require('../controllers/lugares.controller');


router.get('/lugares/:id', lugaresCtrl.getLugar);

router.get('/lugares', lugaresCtrl.getLugares);

router.post('/lugares', lugaresCtrl.createLugares);

router.delete('/lugares/:id', lugaresCtrl.deleteLugares);

router.put('/lugares/:id', lugaresCtrl.editLugares);

module.exports= router;