import mongoose from 'mongoose';

const conectarDB = async ()=>{
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const url = `CONECTADO A MONGODB EN EL SERVER DE LA IGLESIA EN SERVER ${connectionDB.connection.host} - En el Puerto: ${connectionDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(error);
        throw new Error('DB CAN`T INICIALIZATES ')
    }
}

export default conectarDB;