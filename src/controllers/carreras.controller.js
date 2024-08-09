const carrerasCtrl={};

//Consulta una carrera por id 
carrerasCtrl.getCarrera= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM carreras WHERE id_carrera = ?',[id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}

//Consulta todas las carreras
carrerasCtrl.get= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM carreras', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}

carrerasCtrl.createCarrera= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO carreras SET ?',[data], (err, carrera) => {
            res.redirect('/carreras');
        })
    })
}

carrerasCtrl.deleteCarrera= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM carreras WHERE id_carrera = ?',[id], (err, rows) => {
            res.json(rows);
        })
    })
}



carrerasCtrl.editCarrera= (req, res) => {
    const data = req.body;
    const {id}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE carreras SET ? WHERE id_carrera = ?',[data, id], (err, carrera) => {
            this.getCarreras
        })
    })
}


module.exports=carrerasCtrl;