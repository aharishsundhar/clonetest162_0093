
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const productionSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   material: String,
   tools: String,
   price: Number,
   quantity: String
})

const productionModel = mongoose.model('production', productionSchema, 'production');
export default productionModel;
