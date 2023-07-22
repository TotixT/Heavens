import getConnection from "../config/db.js";

const getDepartamentos = async (req, res) => {
    const connection = await getConnection();
    const departamentos = await connection.query("SELECT * FROM departamento");
    res.json(departamentos);
    return departamentos;
}

const postDepartamentos = async (req, res) => {
    try {
     const{nombreDepartamento} = req.body;
     const obj = {nombreDepartamento};
     const connection = await getConnection();
     const result = await connection.query("INSERT INTO departamento SET ?", obj);
     res.json({"message": "Departamento creado"});
 
    } catch (error) {
        res.status(500)
        res.send(error);
    }
 }

 const oneDepartamento = async (req, res) => {
    try {

        const { id } = req.params;
        const connection = await getConnection();
        const departamentos = await connection.query("SELECT * FROM departamento WHERE idDepartamento = ?", id);
        res.json(departamentos);
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

const deleteDepartamento = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const categorias = await connection.query("DELETE FROM departamento WHERE idDepartamento = ?", id);
        res.json({"message": "Departamento eliminada"});
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

const putDepartamento= async (req, res) => {
    try {
        const { id } = req.params;
        const {nombreDepartamento} = req.body;
        const obj = {nombreDepartamento};
        const connection = await getConnection();
        const departamentos = await connection.query("UPDATE departamento SET ? WHERE idDepartamento = ?", [req.body, id]);
        res.json({"message": "Departamento actualizada"});
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

export const metodosDepartamento = {
    getDepartamentos,
    postDepartamentos,
    oneDepartamento,
    deleteDepartamento,
    putDepartamento
}