import {categoryModel} from '../../../dataBase/models/category.model.js'
const createCategory=async(req,res, next)=>{
   let {name}= req.body;
   let results= new categoryModel({name, slug:name})
   await results.save()
   res.status(201).json({message:`added`})
}
const getAllCategory=async(req,res, next)=>{
   
    let results=cateroryModel.find({})
    
    res.json({message:`done`},results)
 }
 const getCategoryById=async(req,res, next)=>{
   let{id}=req.params;
    let results=categoryModel.findById(id)
    
    res.json({message:`done`},results)
 }
 const updateCategory=async(req,res, next)=>{
    let{id}=req.params;
    let{name}=req.body;
     let results=
     categoryModel.findByIdAndUpdate(id,{name,slug:name},{new:true})
     
     res.json({message:`done`},results)
  }
  const deleteCategory=async(req,res, next)=>{
    let{id}=req.params;

     let results=
     categoryModel.findByIdAndDelete(id)
     
     res.json({message:`done`},results)
  }
  export{
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
  }
