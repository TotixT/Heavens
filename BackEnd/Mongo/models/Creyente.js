import mongoose from "mongoose";

const CreyenteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Name is required']
    },
    ministerio: {
        type: String,
        required: true,
        default: 'Adoracion'
    },
    nivelFormacion: {
        type: String,
        required: true,
        default: 'Anciano',
        // enum: ['Liderazgo','Anciano']
    },
    edad: {
        type: Number,
        required: [true, 'Age is required']
    },
    nivelRuta: {
        type: String,
        required: true,
        default: 'nuevo',
        // enum: ['consolidado','nuevo','enviado']
    }
});

const Creyente = mongoose.model("creyentes",CreyenteSchema);
export default Creyente;