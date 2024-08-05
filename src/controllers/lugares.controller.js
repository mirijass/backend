const lugarCtrl={};

//Consulta un empleado por su ID 
lugarCtrl.getLugar= (req, res) => {
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
lugarCtrl.getLugar= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM lugar', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}

lugarCtrl.createLugar= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO lugar SET ?',[data], (err, lugar) => {
            res.redirect('/lugar');
        })
    })
}

lugarCtrl.deleteLugar= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM lugar WHERE id = ?',[id], (err, rows) => {
            res.json(rows);
        })
    })
}



lugarCtrl.editLugar= (req, res) => {
    const data = req.body;
    const {id}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE lugar SET ? WHERE id = ?',[data, id], (err, lugar) => {
            this.getLugar
        })
    })
}


module.exports=lugarCtrl;