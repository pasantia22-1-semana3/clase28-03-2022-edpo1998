import {EstadisticaModel} from '../models/EstadisticaModel.js';
import {response} from '../../../response/response.js';

const estadisticaModel = new EstadisticaModel();

export class EstadisticaController{

    constructor(){}

    getAllCrime(req,res){
        try{
            let allEstadistics = estadisticaModel.all()
            response.succes(req,res,allEstadistics.delitos,200)
        }catch(err){
            console.log(err)
            response.console.error(req,res,null,500)
        }
    }

    getListCrimeWithYear(req,res){
        try{
            let allEstadistics = estadisticaModel.all()
            let crimes = allEstadistics.delitos
            let yearCrimes = allEstadistics.dataanio
            let crimesWithYears = yearCrimes.map((year)=>{
                return({
                    year: year.anio,
                    delitos: year.data.map((x)=>({
                        delito: (crimes.find(element => (element.id == x.delito))).name,
                        total:x.total,
                        hombres:x.hombre,
                        mujeres:x.mujer,
                        ignorados:x.ignorados
                    }))
                })
            })
            response.succes(req,res,crimesWithYears,200)
        }catch(err){
            console.log(err)
            response.console.error(req,res,null,500)
        }
    }


    getAllTotalSexCrime(req,res){
        let allEstadistics = estadisticaModel.all()
        let crimes = allEstadistics.delitos
        let yearCrimes = allEstadistics.dataanio
        
        let totalcrimes = crimes.map((c)=>{
            let totalhombres = 0
            let totalmujeres = 0
            yearCrimes.map((delyear) =>{
                delyear.data.map(year=>{
                    if(c.id== year.delito){
                        totalhombres+= parseInt(year.hombre)
                        totalmujeres+= parseInt(year.mujer)
                    }
                })
            })
            return ({
                delito:c.name,
                hombres:totalhombres,
                mujeres:totalmujeres
            })
        })
        response.succes(req,res,totalcrimes,200)
    }

    getAllTotalCrime(req,res){
        let allEstadistics = estadisticaModel.all()
        let crimes = allEstadistics.delitos
        let yearCrimes = allEstadistics.dataanio
        
        let totalcrimes = crimes.map((c)=>{
            let total = 0
            yearCrimes.map((delyear) =>{
                delyear.data.map(year=>{
                    if(c.id== year.delito){
                        total+= parseInt(year.total)
                    }
                })
            })
            return ({
                delito:c.name,
                total:total,
            })
        })
        response.succes(req,res,totalcrimes,200)
    }
}