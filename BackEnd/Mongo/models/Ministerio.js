import mongoose from "mongoose";

const MinisterioSchema = mongoose.Schema({
    ministerio: {
        type: String,
        required: [true, 'El Ministerio es Obligatorio']
    }
});

const Ministerio = mongoose.model("ministerios",MinisterioSchema);
export default Ministerio;