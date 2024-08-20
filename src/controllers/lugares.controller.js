const lugaresCtrl={};


lugaresCtrl.getLugar= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM lugares WHERE id_lugar = ?',[id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}


lugaresCtrl.getLugaresRenta= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM lugares WHERE id_categoria= 4', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}
lugaresCtrl.getLugaresEntretenimiento= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM lugares where id_categoria = 2', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}
lugaresCtrl.getLugaresComida= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM lugares where id_categoria = 3', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}
lugaresCtrl.getLugaresTransporte= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM lugares where id_categoria = 5', (err, rows) => {
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
        conn.query('INSERT INTO lugares SET ?',[data], (err, lugar) => {
            res.json(lugar);
        })
    })
}

lugaresCtrl.deleteLugares= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM lugares WHERE id_lugar = ?',[id], (err, rows) => {
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