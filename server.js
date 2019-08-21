const express=require("express")
const app=express()
var cors = require('cors')

app.use(cors())
const axios = require('axios');
app.get("/",(req,res)=>{
res.json("hiii")
})

app.get("/tas",(req,res)=>{
    res.json("hi")
    })

   app.get("/call/:id",(req,res)=>{
     let o=req.params.id
     axios.get(`https://api.github.com/users/${o}/repos?page=1&per_page=5`)
  .then((response)=> {
    res.json(response.data)
    })
  .catch((Error)=>{
     res.json("hi")
  })
}
   )
const PORT=8000
app.listen(PORT,()=>console.log("port"))

