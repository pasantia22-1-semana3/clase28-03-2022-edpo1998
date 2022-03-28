import dotenv from 'dotenv';    

const env = dotenv.config();
export const config = {
    api:{
        host: process.env.HOST || '127.0.0.1',
        port: process.env.PORT || 3000,
        app: process.env.APP || "EstadisticaGT"
    }
}