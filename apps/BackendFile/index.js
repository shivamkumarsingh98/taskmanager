const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors');
const bodyparser = require('body-parser')
const router = require('./router/userRoute')
dotenv.config()



app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", router)


main().catch(err => console.log("main error",err));

async function main() {
  await mongoose.connect(process.env.URL_DataBas).then((res)=>console.log("mongoss is conect ")).catch((error)=>
  console.log("mongoose cath error",error))
}


app.listen(8080,(req,res)=>{
    console.log("http:// localhost8080")
})
app.get("/",(req,res)=>{
res.send("helth api is running")
})