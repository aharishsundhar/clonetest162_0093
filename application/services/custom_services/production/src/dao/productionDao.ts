import * as mongoose from 'mongoose';
import productionModel from '../models/production';
import { CustomLogger } from '../config/Logger'


export class productionDao {
    private production = productionModel;
    constructor() { }
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into productionDao.ts: GpGetAllValues')

this.production.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from productionDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(productionData, callback){
new CustomLogger().showLogger('info', 'Enter into productionDao.ts: GpCreate')
let temp = new productionModel(productionData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from productionDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}