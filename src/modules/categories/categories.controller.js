import cateroryModel from '../../../dataBase/models/category.model.js'
const createCategory=async(req,res, next)=>{
   let {name}= req.body;
   let results= new cateroryModel({name, slug:name})
   await results.save()
   results.status(201).json({message:`added`})
}
const getAllCategory=async(req,res, next)=>{
   
    let results=cateroryModel.find({})
    
    results.json({message:`done`},results)
 }
 const getCategoryById=async(req,res, next)=>{
   let{id}=req.params;
    let results=cateroryModel.findById(id)
    
    results.json({message:`done`},results)
 }
 const updateCategory=async(req,res, next)=>{
    let{id}=req.params;
    let{name}=req.body;
     let results=
     cateroryModel.findByIdAndUpdate(id,{name,slug:name},{new:true})
     
     results.json({message:`done`},results)
  }
  const deleteCategory=async(req,res, next)=>{
    let{id}=req.params;

     let results=
     cateroryModel.findByIdAndDelete(id)
     
     results.json({message:`done`},results)
  }
  export{
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
  }
