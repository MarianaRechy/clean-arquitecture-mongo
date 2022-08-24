const { Router, response, request } = require("express")
const express = require("express")
const app = require ("../server")

const {  create } = require("../usecases/generation.usecases")

//Haciendo router
const router = express.Router()

router.post("/", async (request,response) => {
    try{
        const { query } = request
        const gen = await create(query)
        response.json({
            success: true,
            data:({
                gen
            })
        })
    }catch(error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router
