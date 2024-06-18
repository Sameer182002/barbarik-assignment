const express = require("express")
const app = express()
const PORT = 3005
const cors =require("cors")
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use("/zoho",require("./routes/zohoRoutes"))

app.listen(PORT,(err)=>{
    if(err){
        console.log("Error while listening ",err?.message || err);
        return
    }
    console.log(`server is running on ${PORT}`)
})