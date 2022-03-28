import {EstadisticaModel} from '../models/EstadisticaModel.js';
import {response} from '../../../response/response.js';

const estadisticaModel = new EstadisticaModel();

export class EstadisticaController{

    constructor(){}

    getAllCrime2(req,res){
        try{
            let allEstadistics = estadisticaModel.all()
            response.succes(req,res,allEstadistics.delitos,200)
        }catch(err){
            console.log(err)
            response.console.error(req,res,null,500)
        }
    }
    getAllCrime(req,res){
        try{
            let allEstadistics = estadisticaModel.all()
            let delitos = allEstadistics.delitos.map((x)=> ({name:x.name}))
            response.succes(req,res,delitos,200)
        }catch(err){
            console.log(err)
            response.console.error(req,res,null,500)
        }
    }

    getListCrimeWithYear2(req,res){
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

    getListCrimeWithYear(req,res){
        try{
            let allEstadistics = estadisticaModel.all();
            let crimeWithYear = allEstadistics.delitos
            response.succes(req,res,crimeWithYear,200)
        }catch(err){
            console.log(err)
            response.console.error(req,res,null,500)
        }
    }

    getAllTotalSexCrime2(req,res){
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

    getAllTotalSexCrime(req,res){
        try{
            let allEstadistics = estadisticaModel.all()
            let crimes = allEstadistics.delitos
            
            let delitoSexo = crimes.map((crime)=>{
                let h =0;
                let m =0;
                crime.anios.map((year)=>{
                    h += parseInt(year.hombre)
                    m += parseInt(year.mujer)
                })
                return ({
                    delito:crime.name,
                    hombres:h,
                    mujeres:m
                })
            });
            response.succes(req,res,delitoSexo,200)
        }catch(err){
            console.log(err)
            response.console.error(req,delitoSexo,null,500)
        }
    }

    getAllTotalCrime2(req,res){
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



    getAllTotalCrime(req,res){
        try{
            let allEstadistics = estadisticaModel.all()
            let crimes = allEstadistics.delitos
            
            let delitoSexo = crimes.map((crime)=>{
                let t =0;
                crime.anios.map((year)=>{
                    t += parseInt(year.total)
                })
                return ({
                    delito:crime.name,
                    total:t,
                })
            });
            response.succes(req,res,delitoSexo,200)
        }catch(err){
            console.log(err)
            response.console.error(req,delitoSexo,null,500)
        }
    }

}