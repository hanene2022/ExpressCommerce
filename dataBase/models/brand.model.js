import {Schema, model} from "mongoose"
const brandSchema=new Schema({
    name:{
        type: String,
        unique:true,
        required:true,
      trim:true
    },
    slug:{
        type:String,
        lowercase:true,
    },
    logo:{
        type:String,
       
    },
   

}
, {
    timestamps: true,
  })
export const brandModel= model('brand',brandSchema)