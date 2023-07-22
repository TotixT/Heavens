import getConnection from "../config/db.js";

const getMunicipio = async (req, res) => {
    const connection = await getConnection();
    const municipios = await connection.query("SELECT idMunicipio, nombreMunicipio, departamento.nombreDepartamento FROM municipio INNER JOIN departamento ON municipio.idDepartamento = departamento.idDepartamento;");
    res.json(municipios);
    return municipios;
}

const postMunicipio = async (req, res) => {
    try {
     const{nombreMunicipio, idDepartamento} = req.body;
     const obj = {nombreMunicipio, idDepartamento };
     const connection = await getConnection();
     const result = await connection.query("INSERT INTO municipio SET ?", obj);
     res.json({"message": "Municipio creado"});
 
    } catch (error) {
        res.status(500)
        res.send(error);
    }
 }

 const oneMunicipio = async (req, res) => {
    try {

        const { id } = req.params;
        const connection = await getConnection();
        const municipios = await connection.query("SELECT * FROM municipio WHERE idMunicipio = ?", id);
        res.json(municipios);
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

const deleteMunicipio = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const categorias = await connection.query("DELETE FROM municipio WHERE idMunicipio = ?", id);
        res.json({"message": "Departamento eliminada"});
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

const putMunicipio= async (req, res) => {
    try {
        const { id } = req.params;
        const {nombreMunicipio, idDepartamento} = req.body;
        const obj = {nombreMunicipio, idDepartamento};
        const connection = await getConnection();
        const municipios = await connection.query("UPDATE municipio SET ? WHERE idMunicipio = ?", [req.body, id]);
        res.json({"message": "Municipio actualizado"});
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

export const metodosMunicipio = {
    getMunicipio,
    postMunicipio,
    oneMunicipio,
    deleteMunicipio,
    putMunicipio
}