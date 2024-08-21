const express = require ('express'); 
const morgan = require ('morgan');
const mysql = require ('mysql2');
const myConnection = require ('express-myconnection');

const app = express();
const cors = require ('cors');

// const mascotaRouter= require('./routes/categorias.router');
// const empleadoRouter=require('./routes/carreras.router');
// const usuarioRouter=require('./routes/usuarios.router');

app.set ('port', 4000);
app.use (cors());
app.use (morgan('dev'));

app.use(myConnection(mysql,{
    host: 'junction.proxy.rlwy.net',
    user: 'root',
    password: 'AdfCxIhdrburrVGrEQWPuNcnoOTySEDA',
    port: 21726,
    database: 'railway'  
}, 'single'));

app.use (express.json());
app.use (express.urlencoded({extended:false}));
app.use(require('./routes/categorias.router'));
app.use(require('./routes/carreras.router'));
app.use(require('./routes/usuarios.router'));
app.use(require('./routes/comentarios.router'));
app.use(require('./routes/lugares.router'));

module.exports= app;