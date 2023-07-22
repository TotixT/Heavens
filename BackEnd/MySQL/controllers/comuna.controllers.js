import getConnection from "../config/db.js";

const getComuna = async (req, res) => {
    const connection = await getConnection();
    const comunas = await connection.query("SELECT idComuna, nombreComuna, municipio.nombreMunicipio FROM comuna INNER JOIN municipio ON comuna.idMunicipio = municipio.idMunicipio;");
    res.json(comunas);
    return comunas;
}

const postComuna = async (req, res) => {
    try {
     const{nombreComuna, idMunicipio } = req.body;
     const obj = {nombreComuna, idMunicipio  };
     const connection = await getConnection();
     const result = await connection.query("INSERT INTO comuna SET ?", obj);
     res.json({"message": "Comuna creada"});
 
    } catch (error) {
        res.status(500)
        res.send(error);
    }
 }

 const oneComuna = async (req, res) => {
    try {

        const { id } = req.params;
        const connection = await getConnection();
        const comunas = await connection.query("SELECT * FROM comuna WHERE idComuna  = ?", id);
        res.json(comunas);
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

const deleteComuna = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const comunas = await connection.query("DELETE FROM comuna WHERE idComuna = ?", id);
        res.json({"message": "Comuna eliminada"});
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

const putComuna = async (req, res) => {
    try {
        const { id } = req.params;
        const {nombreComuna, idMunicipio} = req.body;
        const obj = {nombreComuna, idMunicipio};
        const connection = await getConnection();
        const comunas = await connection.query("UPDATE comuna SET ? WHERE idComuna = ?", [req.body, id]);
        res.json({"message": "Comuna actualizado"});
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

export const metodosComuna = {
    getComuna,
    postComuna,
    oneComuna,
    deleteComuna,
    putComuna
}