const lugarCtrl={};


lugarCtrl.getLugar= (req, res) => {
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


lugarCtrl.getLugares= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM lugares', (err, rows) => {
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
        conn.query('INSERT INTO lugares SET ?',[data], (err, lugar) => {
            res.redirect('/lugar');
        })
    })
}

lugarCtrl.deleteLugar= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM lugares WHERE id_lugar = ?',[id], (err, rows) => {
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