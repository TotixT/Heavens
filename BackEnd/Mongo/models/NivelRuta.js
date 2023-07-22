import mongoose from "mongoose";

const NivelRutaSchema = mongoose.Schema({
    nivelRuta: {
        type: String,
        required: [true, 'El Nivel de Ruta es Obligatorio']
    }
});

const NivelRuta = mongoose.model("nivelesrutas",NivelRutaSchema);
export default NivelRuta;