const  comentariosCtrl={};

comentariosCtrl.getComentario= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM comentario WHERE id = ?',[id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}

comentariosCtrl.getComentarios= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM comentario', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}

comentariosCtrl.createComentario= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO comentario SET ?',[data], (err, comentario) => {
        })

    })
}
comentariosCtrl.deleteComentario= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM comentario WHERE id = ?',[id], (err, rows) => {
            res.json(rows);
        })
    })
}



comentariosCtrl.editComentario= (req, res) => {
    const data = req.body;
    const {id}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE comentario SET ? WHERE id = ?',[data, id], (err, comentario) => {
            this.getComentarios
        })
    })
}


module.exports=comentariosCtrl;