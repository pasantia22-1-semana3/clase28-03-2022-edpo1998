import fs from 'fs';


export class EstadisticaModel{
    constructor(){
        this._name = 'db';
        this._dataDir = 'db';
        this._dataPath = 'db/db.json';
    }

    readJsonFile(){
        let contentFile = fs.readFileSync(this._dataPath,'utf-8');
        if(contentFile){
            return JSON.parse(contentFile);
        }else{
            return [];
        }
    }

    writeJsonFile(data){
        let jsonData = JSON.stringify(data,null,'');
        fs.writeFileSync(this._dataPath,jsonData);
        
    }


    all(){
        return this.readJsonFile()
    }

    
}