const Koder = require ("../models/koder.model")

//Funciones
//Handlers

const create = (koderdata) =>{
    //crear un koder
    const koder = koder.create(koderdata)
    return koder
}

//Get koder
//Actualizar koder
//Eliminar Koder
module.exports = { create }
