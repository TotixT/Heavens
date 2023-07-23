import getConnection from "../config/db.js";

const getCreyente = async (req, res) => {
    const connection = await getConnection();
    const creyentes = await connection.query("SELECT idIdentificacion , nombre, email, nroCelular, direccion, barrio.nombreBarrio FROM creyente INNER JOIN barrio ON creyente.idBarrio = barrio.idBarrio;");
    res.json(creyentes);
    return creyentes;
}

const postCreyente = async (req, res) => {
    try {
     const{ nombre, email, nroCelular, direccion, idBarrio } = req.body;
     const obj = { nombre, email, nroCelular, direccion, idBarrio  };
     const connection = await getConnection();
     const result = await connection.query("INSERT INTO creyente SET ?", obj);
     res.json({"message": "Creyente creado"});
 
    } catch (error) {
        res.status(500)
        res.send(error);
    }
 }

 const oneCreyente = async (req, res) => {
    try {

        const { id } = req.params;
        const connection = await getConnection();
        const creyentes = await connection.query("SELECT * FROM creyente WHERE idIdentificacion  = ?", id);
        res.json(creyentes);
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

const deleteCreyente = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const creyentes = await connection.query("DELETE FROM creyente WHERE idIdentificacion = ?", id);
        res.json({"message": "Creyente eliminado"});
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

const putCreyente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, nroCelular, direccion, idBarrio } = req.body;
        const obj = { nombre, email, nroCelular, direccion, idBarrio };
        const connection = await getConnection();
        const creyentes = await connection.query("UPDATE creyente SET ? WHERE idIdentificacion = ?", [req.body, id]);
        res.json({"message": "Creyente actualizado"});
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

export const metodosCreyente = {
    getCreyente,
    postCreyente,
    oneCreyente,
    deleteCreyente,
    putCreyente
}