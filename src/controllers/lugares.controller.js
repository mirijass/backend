const lugaresCtrl={};

//Consulta un empleado por su ID 
lugaresCtrl.getLugares= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM lugar WHERE id = ?',[id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}

//Consulta todos los empleados
lugaresCtrl.getLugares= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM lugar', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}

lugaresCtrl.createLugares= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO lugar SET ?',[data], (err, lugares) => {
            res.redirect('/lugares');
        })
    })
}

lugaresCtrl.deleteLugares= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM lugar WHERE id = ?',[id], (err, rows) => {
            res.json(rows);
        })
    })
}



lugaresCtrl.editLugares= (req, res) => {
    const data = req.body;
    const {id}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE lugar SET ? WHERE id = ?',[data, id], (err, lugares) => {
            this.getLugares
        })
    })
}


module.exports=lugaresCtrl;