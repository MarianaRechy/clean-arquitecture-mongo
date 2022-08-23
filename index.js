//Levantar servidor
//Conectar con bd
//Logica de ruteo
//Common JS

require("dotenv").config()
const mongoose  = require("mongoose")
const app = require("./src/server")

//Levantar servidor
console.log("process.env",process.env)


const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
  }  = process.env
  
  // URL
  const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}${DB_HOST}/${DB_NAME}`

  //Promesa -> conectar con mongo por medio de mongoose
mongoose.connect(URL)
.then(()=>{
    console.log("Nos conectamos a la base de datos...")
    //Levantar servidor
app.listen(8080,()=>{
    console.log("Server listening...")
})
})
.catch((err)=>{
    console.log("err",err)
})
