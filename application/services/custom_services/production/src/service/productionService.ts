import { Request, Response } from 'express';
import {productionDao} from '../dao/productionDao';
import { CustomLogger } from '../config/Logger'
let production = new productionDao();

export class productionService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productionService.ts: GpGetAllValues')
     
     production.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from productionService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into productionService.ts: GpCreate')
     const  productionData = req.body;
     production.GpCreate(productionData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from productionService.ts: GpCreate')
         callback(response);
         });
    }


}