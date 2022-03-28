import {Server} from './Server.js'
import {config} from '../config/default.js' 

function main(host,port,name){
    const srv = new Server(host,port,name);
    srv.initServer();
}

main(config.api.host,config.api.port,config.api.app);