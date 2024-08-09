const usuariosCtrl={};

//Consulta un empleado por su ID 
usuariosCtrl.getUsuario= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM usuarios WHERE id_usuario = ?',[id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}



usuariosCtrl.createLogin= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM usuarios WHERE email = ? AND contrasena = ?',[data.email, data.contrasena], (err, rows) => {
            console.log(rows);

            if(err){
                console.log(err);
            }
            if(rows.length==0){
                res.status(404);
            }
            res.json(rows[0]);
        })
    })
}



//Consulta todos los empleados
usuariosCtrl.getUsuarios= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM usuarios', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}

usuariosCtrl.createUsuario= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO usuarios SET ?',[data], (err, usuario) => {
            res.redirect('/usuarios');
        })
    })
}

usuariosCtrl.deleteUsuario= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM usuarios WHERE id_usuario = ?',[id], (err, rows) => {
            res.json(rows);
        })
    })
}



usuariosCtrl.editUsuario= (req, res) => {
    const data = req.body;
    const {id}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE usuarios SET ? WHERE id_usuario = ?',[data, id], (err, usuario) => {
            this.getEmpleados
        })
    })
}


module.exports=usuariosCtrl;