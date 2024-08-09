const  comentariosCtrl={};

comentariosCtrl.getComentario= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM comentarios WHERE id_comentario = ?',[id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}

comentariosCtrl.getComentarios= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM comentarios', (err, rows) => {
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
        conn.query('INSERT INTO comentarios SET ?',[data], (err, comentario) => {
            if(err){
                console.log(err);
            }
            res.json(comentario);
        })

    })
}
comentariosCtrl.deleteComentario= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM comentarios WHERE id_comentario = ?',[id], (err, rows) => {
            res.json(rows);
        })
    })
}



comentariosCtrl.editComentario= (req, res) => {
    const data = req.body;
    const {id}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE comentarios SET ? WHERE id_comentario = ?',[data, id], (err, comentario) => {
            if(err){
                console.log(err);
            }
            this.getComentarios

            res.json(comentario);
        })
    })
}


module.exports=comentariosCtrl;