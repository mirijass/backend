const usuariosCtrl={};

//Consulta un empleado por su ID 
usuariosCtrl.getUsuario= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM usuario WHERE id = ?',[id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}

//Consulta todos los empleados
usuariosCtrl.getUsuarios= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM usuario', (err, rows) => {
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
        conn.query('INSERT INTO usuario SET ?',[data], (err, usuario) => {
            res.redirect('/usuarios');
        })
    })
}

usuariosCtrl.deleteUsuario= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM usuario WHERE id = ?',[id], (err, rows) => {
            res.json(rows);
        })
    })
}



usuariosCtrl.editUsuario= (req, res) => {
    const data = req.body;
    const {id}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE usuario SET ? WHERE id = ?',[data, id], (err, usuario) => {
            this.getEmpleados
        })
    })
}


module.exports=usuariosCtrl;