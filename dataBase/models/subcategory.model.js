import {Schema, model} from "mongoose"
const subCategorySchema=new Schema({
    name:{
        type: String,
        unique:true,
        required:true,
        minlength:[2,'too short category name'],
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

})
export const subCategoryModel= model('subcategory',subCategoryModel)