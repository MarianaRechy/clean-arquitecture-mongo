const express = require("express")

const app = express()

//!Routes
const routerkoder = require("./routes/koder.router")

//!Middleware de route
app.use("/koders", routerkoder)

//Middleware del json
app.use(express.json())


//Endpoint de Home
app.get("/",(request,response)=>{
    response.json({message:"Bienvenido a nuestra API de arquitectura limpia"})
})

//Exportar

module.exports = app