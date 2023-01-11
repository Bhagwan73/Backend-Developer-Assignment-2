const express=require("express")
const mongoose=require("mongoose")
const app=express()
const route=require("./src/routes/route")


require("dotenv").config({path:"./config.env" });
 
app.use(express.json())
mongoose.set('strictQuery', true)
mongoose.connect(`${process.env.MONGODB}`,{useNewUrlParser:true})
.then(()=>console.log("MONGODB IS CONNECTED"))       
.catch((err)=>console.log(err))


app.listen(`${process.env.PORT}`,()=>{
    console.log(`running on port on ${process.env.PORT}`)
})

app.use("/",route)


