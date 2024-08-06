const{Router}= require('express');

const router= Router();

const carrerasCtrl= require('../controllers/carreras.controller');

router.get('/carreras/saludo',(req,res)=>res.send('holaaaaaaa'));

router.get('/carreras/:id', carrerasCtrl.getCarrera);

router.get('/carreras', carrerasCtrl.get);

router.post('/carreras', carrerasCtrl.createCarrera);

router.delete('/carreras/:id', carrerasCtrl.deleteCarrera);

router.put('/carreras/:id', carrerasCtrl.editCarrera);



module.exports= router;
