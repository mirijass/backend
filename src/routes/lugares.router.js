const{Router}= require('express');

const router= Router();

const lugaresCtrl= require('../controllers/lugares.controller');


router.get('/lugares/:id', lugaresCtrl.getLugar);

router.get('/lugares', lugaresCtrl.getLugares);

router.post('/lugares', lugaresCtrl.createLugar);

router.delete('/lugares/:id', lugaresCtrl.deleteLugar);

router.put('/lugares/:id', lugaresCtrl.editLugar);

module.exports= router;