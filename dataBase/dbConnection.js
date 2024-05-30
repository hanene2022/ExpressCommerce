import mongoose from "mongoose"
export function dbConnection(){
mongoose.connect('mongodb:/127.0.0.1:27017/basecommerce')
.then(()=>{
console.log("db  connected")
})
.catch((err)=>{console.log("database eroor",err)

})
}