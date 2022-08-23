// Endpoints

const { Router, response } = require("express")
const express = require("express")
const app = require ("../server")

const { create } = require("../usecases/koder.usecase")

//Haciendo router
const router = express.Router()

//Endpoint de crear
//koders
//mentors
router.post("/", async (request,response) => {

    try{

        const { body } = request
        const koder = await create(body)
        response.status(201)
        response.jason({
            success: true,
            data:({
                koder,
            })
        })
    }catch(error){
        response.status(400)
        response.json({
          success: false,
          message: error.message
        })
      }
})

module.exports = router


