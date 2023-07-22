import getConnection from "../config/db.js";

const getBarrio = async (req, res) => {
    const connection = await getConnection();
    const barrios = await connection.query("SELECT idBarrio, nombreBarrio, comuna.nombreComuna FROM barrio INNER JOIN comuna ON barrio.idComuna = comuna.idComuna;");
    res.json(barrios);
    return barrios;
}

const postBarrio = async (req, res) => {
    try {
     const{ nombreBarrio, idComuna } = req.body;
     const obj = { nombreBarrio, idComuna  };
     const connection = await getConnection();
     const result = await connection.query("INSERT INTO barrio SET ?", obj);
     res.json({"message": "Barrio creado"});
 
    } catch (error) {
        res.status(500)
        res.send(error);
    }
 }

 const oneBarrio = async (req, res) => {
    try {

        const { id } = req.params;
        const connection = await getConnection();
        const barrios = await connection.query("SELECT * FROM barrio WHERE idBarrio  = ?", id);
        res.json(barrios);
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

const deleteBarrio = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const barrios = await connection.query("DELETE FROM barrio WHERE idBarrio = ?", id);
        res.json({"message": "Barrio eliminada"});
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

const putBarrio = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombreBarrio, idComuna } = req.body;
        const obj = { nombreBarrio, idComuna };
        const connection = await getConnection();
        const barrios = await connection.query("UPDATE barrio SET ? WHERE idBarrio = ?", [req.body, id]);
        res.json({"message": "Barrio actualizado"});
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

export const metodosBarrio = {
    getBarrio,
    postBarrio,
    oneBarrio,
    deleteBarrio,
    putBarrio
}