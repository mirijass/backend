const{Router}= require('express');

const router= Router();

const lugaresCtrl= require('../controllers/lugares.controller');


router.get('/lugares/:id', lugaresCtrl.getLugar);

router.get('/lugares/get/entretenimiento', lugaresCtrl.getLugaresEntretenimiento);
router.get('/lugares/get/comida', lugaresCtrl.getLugaresComida);
router.get('/lugares/get/renta', lugaresCtrl.getLugaresRenta);
router.get('/lugares/get/trasporte', lugaresCtrl.getLugaresTransporte);

router.post('/lugares', lugaresCtrl.createLugares);

router.delete('/lugares/:id', lugaresCtrl.deleteLugares);

router.put('/lugares/:id', lugaresCtrl.editLugares);

module.exports= router;