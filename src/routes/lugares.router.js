const{Router}= require('express');

const router= Router();

const lugaresCtrl= require('../controllers/lugares.controller');


router.get('/lugares/:id', lugaresCtrl.getLugar);

router.get('/lugares', lugaresCtrl.getLugares);

<<<<<<< HEAD
router.post('/lugares', lugaresCtrl.createLugares);
=======
router.post('/lugares', lugaresCtrl.createLugar);
>>>>>>> 3be6d9c9480e2f9d086d0a1902f628cfdfeb0585

router.delete('/lugares/:id', lugaresCtrl.deleteLugar);

router.put('/lugares/:id', lugaresCtrl.editLugar);

module.exports= router;