const carrerasCtrl={};

//Consulta una carrera por id 
carrerasCtrl.getCarrera= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM carreras WHERE id = ?',[id], (err, rows) => {
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




module.exports=carrerasCtrl;