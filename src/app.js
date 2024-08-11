const express = require ('express'); 
const morgan = require ('morgan');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');

const app = express();
const cors = require ('cors');

<<<<<<< HEAD
const mascotaRouter= require('./routes/categorias.router');
const empleadoRouter=require('./routes/carreras.router');
const usuarioRouter=require('./routes/usuarios.router');
const lugaresRouter=require('./routes/lugares.router');
=======
// const mascotaRouter= require('./routes/categorias.router');
// const empleadoRouter=require('./routes/carreras.router');
// const usuarioRouter=require('./routes/usuarios.router');
>>>>>>> 3be6d9c9480e2f9d086d0a1902f628cfdfeb0585

app.set ('port', 4000);
app.use (cors());
app.use (morgan('dev'));

app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'aguilas_foraneas'  
}, 'single'));

app.use (express.json());
app.use (express.urlencoded({extended:false}));
app.use(require('./routes/categorias.router'));
app.use(require('./routes/carreras.router'));
app.use(require('./routes/usuarios.router'));
<<<<<<< HEAD
=======
app.use(require('./routes/comentarios.router'));
>>>>>>> 3be6d9c9480e2f9d086d0a1902f628cfdfeb0585
app.use(require('./routes/lugares.router'));

module.exports= app;