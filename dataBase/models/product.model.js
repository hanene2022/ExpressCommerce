import {Schema, model} from "mongoose"
const productSchema=new Schema({
    title:{
        type: String,
        unique:true,
        required:true,
        minlength:[10,'too short category name'],
        trim:true
    },
    slug:{
        type:String,
        lowercase:true,
    },
    price:{
        type:Number,
        min:0,
        default:0,
    },
    priceAfterDiscount:{
        type:Number,
        min:0,
        default:0,
    },
     ratingAvg: {
        type: Number,
        min: [1, "rating average must be greater then 1"],
        max: [5, "rating average must be less then 5"],
      },
      quantity: {
        type: Number,
        default: 0,
        min: 0,
        required: [true, "product quantity is required"],
      },
      sold: {
        type: Number,
        default: 0,
        min: 0,
      },
      ratingCount: {
        type: Number,
        default: 0,
        min: 0,
      }
,description:{
    type:String,
    minLength: [5, "description is too short"],
    maxLength: [300, "description is too long"],
    required:true,
trim:true
}
,imgCover:{type:String},
images:{
    type:[String]
}, category:{
    type:Schema.ObjectId,
    ref:"category",required:true,

}, subcategory:{
    type:Schema.ObjectId,
    ref:"subcategory",required:true,

},

brand:{
    type:Schema.ObjectId,
    ref:"brand",required:true,


},
}, {
    timestamps: true,
  }
)
export const productModel= model('product',productSchema)