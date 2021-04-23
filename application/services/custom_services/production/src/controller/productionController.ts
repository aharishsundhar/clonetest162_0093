import { Request, Response } from 'express';
import { productionService } from '../service/productionService';
import { CustomLogger } from '../config/Logger'
let production = new productionService();

export class productionController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
production.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productionController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productionController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
production.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into productionController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from productionController.ts: GpCreate');
    })}


}