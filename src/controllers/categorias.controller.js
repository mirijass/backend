const  categoriasCtrl={};

categoriasCtrl.getCategoria= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM categoria WHERE id = ?',[id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}

categoriasCtrl.getCategorias= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM categoria', (err, rows) => {
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
        conn.query('INSERT INTO categoria SET ?',[data], (err, categoria) => {
        })

    })
}



categoriasCtrl.editCategoria= (req, res) => {
    const data = req.body;
    const {id}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE categoria SET ? WHERE id = ?',[data, id], (err, categoria) => {
            this.getCategorias
        })
    })
}


module.exports=categoriasCtrl;