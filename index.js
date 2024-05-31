import express  from 'express'
import  dotenv from 'dotenv'
import { dbConnection } from './dataBase/dbConnection.js'
import categoryRouter from './src/modules/categories/categories.routes.js';
dotenv.config();
import morgan from "morgan"
const app = express();
const port = 4000;
app.use(express.json())
app.use(morgan('dev'))
app.use("/category",categoryRouter)
app.all('*', (req, res)=> 
    res.json({message:`can't find this route: ${req.originalUrl}`}))

app.use((err,req,res,next) => {
  res.status(500).json(err)
}
)
dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))