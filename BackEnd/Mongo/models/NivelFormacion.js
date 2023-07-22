import mongoose from "mongoose";

const NivelFormacionSchema = mongoose.Schema({
    nivelFormacion: {
        type: String,
        required: [true, 'El Nivel de Formacion es Obligatorio']
    }
});

const NivelFormacion = mongoose.model("nivelesformaciones",NivelFormacionSchema);
export default NivelFormacion;