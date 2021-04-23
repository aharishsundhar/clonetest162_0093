import { Request, Response, NextFunction } from "express";
import { productionController } from '../controller/productionController';


export class Routes {
    private production: productionController = new productionController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/production').get(this.production.GpGetAllValues);
app.route('/production').post(this.production.GpCreate);
     }

}