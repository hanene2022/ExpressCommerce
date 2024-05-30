import {Schema, model} from "mongoose"
const categorySchema=new Schema({
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
        required:[true,"slug is required"],
    },
    image:{
        type:String,
        required:true
    },

},
{timestamps:true})
export const categoryModel= model('category',categorySchema)
