import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import estadisticaRoutes from '../api/estadistica/routes/estadistica.route.js';

const swaggerSpec = {
    definition: {
        openapi:"3.0.0",
        info:{
            title: "estadisticagt",
            version: "1.0.0",
        },
        server:[
            {
                url: "http://localhost:4000/estadisticagt/v1/doc/"
            }
        ]
    },
    apis:["./api/estadistica/routes/*.js"]
}


export class Server{
    constructor(hostName,port,nameApp){
        this._hostName = hostName;
        this._port = port;
        this._nameApp = nameApp;
        this._api =  express();
        this.initMiddlewares();
        this.initRoutes();
    }

    initMiddlewares(){
        this._api.use(express.json());
        this._api.use(express.urlencoded({extended:true}));
    }

    initRoutes(){  
       this._api.use("/estadisticagt/v1/doc",swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
        
       this._api.use("/estadisticagt/v1/delitos",estadisticaRoutes)
        
        this._api.use("/estadisticagt/v1/home",(req,res)=>{
            res.json({message: `Welcome to ${this._nameApp}`})
        });
       
    }

    initServer(){
        try{
            this._api.set('trust proxy', this._hostName);
            this._api.listen(this._port,()=>{
                 console.log(`Server of ${this._nameApp} running at http://${this._hostName}:${this._port}/estadisticagt/v1/home`)
             });
        }catch(err){
            console.log("Error start server");
        }
    }

}