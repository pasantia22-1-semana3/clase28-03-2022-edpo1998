import express from 'express';
import {EstadisticaController} from '../controller/estadistica.ctl.js'

const routerEstadistica = express.Router();

const estadisticaController = new EstadisticaController()


/**
 * @swagger
 * components:
 *      schemas:
 *          Delito:
 *              type: object
 *              properties:
 *                  delito:
 *                      type: string
 *                      description: descripcion del delito
 *                  total:
 *                      type: number
 *                      description: total crimes 
 *                  hombre:
 *                      type: number
 *                      description: total de hombres por delito
 *                  mujer:
 *                      type: number
 *                      description: total de mujeres por delito
 *                  ignorados:
 *                      type: number
 *                      description: total de ignorados por delito
 *                  anio:
 *                      type: number
 *                      description: detalles del anio
 *              required:
 *                  - delito 
 *                  - total
 *                  - anio
 *              example:
 *                  title: first note
 *                  content: my fist note
 *                  status: false          
 */

/**
 * @swagger
 * /estadisticagt/v1/delitos:
 *  get:
 *    summary: return todos los delitos
 *    tags: [delitos]   
 *    responses:
 *      200:
 *        description: all delitos!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Delito'
 *                    
 */

routerEstadistica.get("/",estadisticaController.getAllCrime);

/**
 * @swagger
 * /estadisticagt/v1/delitos/year:
 *  get:
 *    summary: return todos los delitos
 *    tags: [delitos]   
 *    responses:
 *      200:
 *        description: all delitos!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Delito'
 *                    
 */
routerEstadistica.get("/year",estadisticaController.getListCrimeWithYear);

/**
 * @swagger
 * /estadisticagt/v1/delitos/sexo:
 *  get:
 *    summary: return todos los delitos
 *    tags: [delitos]   
 *    responses:
 *      200:
 *        description: all delitos!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Delito'
 *                    
 */
routerEstadistica.get("/sexo",estadisticaController.getAllTotalSexCrime);

/**
 * @swagger
 * /estadisticagt/v1/delitos/total:
 *  get:
 *    summary: return todos los delitos
 *    tags: [delitos]   
 *    responses:
 *      200:
 *        description: all delitos!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Delito'
 *                    
 */
routerEstadistica.get("/total",estadisticaController.getAllTotalCrime);


export default routerEstadistica