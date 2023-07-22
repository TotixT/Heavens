import Creyente from "../models/Creyente.js";

const getCreyente = async (req, res)=>{
    const creyentes = await Creyente.find();
    res.json(creyentes);
}

const postCreyente = async (req, res)=>{
    const creyente = new Creyente(req.body);
    try {
        const nuevoCreyente = await creyente.save();
        res.json(nuevoCreyente);
    } catch (error) {
        console.log(error);
    }
}

const deleteCreyente = async (req, res)=>{
    try {
        await Creyente.deleteOne({_id: req.params.id})
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Creyente NO Existe"});
    }
}

const oneCreyente = async (req, res)=>{
    try {
        const creyente = await Creyente.findOne({_id: req.params.id});
        res.send(creyente);
    } catch (error) {
        res.status(404);
        res.send({error: "Creyente NO Existe"});
    }
}

const putCreyente = async (req, res)=>{
    try {
        const creyente = await Creyente.findOne({_id: req.params.id});

        if(req.body.nombre){
            creyente.nombre = req.body.nombre;
        }

        if(req.body.ministerio){
            creyente.ministerio = req.body.ministerio;
        }

        if(req.body.nivelFormacion){
            creyente.nivelFormacion = req.body.nivelFormacion;
        }

        if(req.body.edad){
            creyente.edad = req.body.edad;
        }

        if(req.body.nivelRuta){
            creyente.nivelRuta = req.body.nivelRuta;
        }

        await creyente.save();
        res.send(creyente);

    } catch (error) {
        res.status(404);
        res.send({error: "Creyente NO Existe"})
    }
}

export { getCreyente, postCreyente, deleteCreyente, oneCreyente, putCreyente };
