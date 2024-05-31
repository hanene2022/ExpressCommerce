import {categoryModel} from '../../../dataBase/models/category.model.js'
import slugify from 'slugify';

const catchAsyncError=(fn)=>{
return(req,res, next)=>{
   fn(req,res, next)
   .catch((err) => {
      next(err)
     
   }
   )
}
}
const createCategory=catchAsyncError(async(req,res, next)=>{
   let {name}= req.body;
   let results= new categoryModel({name, slug:slugify(name)})
   let added=await results.save()
   res.status(201).json({message:"added",added});
})
const getAllCategory= catchAsyncError (async(req,res, next)=>{
   let results= await categoryModel.find({})
    res.json({message:"done",results})
 })
 const getCategoryById= catchAsyncError(async(req,res, next)=>{
   let{id}=req.params;
    let results= await categoryModel.findById(id)
    
    res.json({message:"done",results})
 })
 const updateCategory= catchAsyncError(async(req,res, next)=>{
    let{id}=req.params;
    let{name}=req.body;
     let results= await
     categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
     
     res.json({message:"done",results})
  })
  const deleteCategory= catchAsyncError(async(req,res, next)=>{
    let{id}=req.params;

     let results=await categoryModel.findByIdAndDelete(id)
    
!results && res.status(404).json({message:"category not found"})
 results &&  res.json({message:"done",results})  
    
  })
  export{
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
  }
