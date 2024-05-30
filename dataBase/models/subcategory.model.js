import {Schema, model} from "mongoose"
const subCategorySchema=new Schema({
    name:{
        type: String,
        unique:true,
        required:true,
        minlength:[2,'too short subcategory name'],
        trim:true
    },
    slug:{
        type:String,
        lowercase:true,
    },
    category:{
        type:Schema.ObjectId,
        ref:"category",
        required:true,
    }

},{timestamps:true})
export const subCategoryModel= model('subcategory',subCategorySchema)