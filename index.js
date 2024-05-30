import express  from 'express'
import  dotenv from 'dotenv'
import { dbConnection } from './dataBase/dbConnection.js'
dotenv.config();
const app = express()
const port = 4000
app.use(express.json())
app.get('*', (req, res)=> 
    res.json({message:`can't find this route: ${req.originalUrl}`}))
dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))