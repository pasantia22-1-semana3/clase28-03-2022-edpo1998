import fs from 'fs';


export class EstadisticaModel{
    constructor(){
        this._name = 'db2';
        this._dataDir = 'db2';
        this._dataPath = 'db/db2.json';
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