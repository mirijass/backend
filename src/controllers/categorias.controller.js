const  categoriasCtrl={};

categoriasCtrl.getCategoria= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM categorias WHERE id_categoria = ?',[id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}

categoriasCtrl.getCategorias= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM categorias', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}

categoriasCtrl.createCategoria= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO categorias SET ?',[data], (err, categoria) => {
            res.json(categoria);
        })

    })
}

<<<<<<< HEAD
=======

categoriasCtrl.deleteCategorias= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM categorias WHERE id_categoria = ?',[id], (err, rows) => {
            res.json(rows);
        })
    })
}



>>>>>>> 3be6d9c9480e2f9d086d0a1902f628cfdfeb0585
categoriasCtrl.editCategoria= (req, res) => {
    const data = req.body;
    const {id}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE categorias SET ? WHERE id_categoria = ?',[data, id], (err, categoria) => {
            this.getCategorias
        })
    })
}
categoriasCtrl.getCategoria= (req, res) => {
    const {salud} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM categoria WHERE salud = ?',[id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}

module.exports=categoriasCtrl;