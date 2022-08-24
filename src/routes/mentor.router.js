const { Router, response, request } = require("express")
const express = require("express")
const app = require ("../server")

const { 
    create,
    getMentor,
    allMentors,
    updateMentor,
    removeMentor
 } = require("../usecases/mentor.usecase")

//Haciendo router
const router = express.Router()

//Endpoint de crear
//mentors
router.post("/", async (request,response) => {

    try{

        const { body } = request
        console.log("body", body)
        const mentor = await create(body)
        response.status(201)
        response.json({
            success: true,
            data:({
                mentor,
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


router.get("/:id", async(request,response) =>{
    try{
        const { params } = request
        const mentor = await getMentor(params.id)
        response.status(201)
        response.json({
            success: true,
            data:({
                mentor,
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


router.get("/", async (request, response)=>{
    try{
        const { query } = request
        const mentors = await allMentors(query)
        response.json({

        })
    }catch(error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

router.patch("/:id", async(request,response) =>{
    try{
        const { params } = request
        const mentor = await updateMentor(params.id, body)
        response.status(201)
        response.json({
            success: true,
            data:({
                mentor,
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


router.delete("/:id", async(request,response) =>{
    try{
        const { params } = request
        const mentor = await removeMentor(params.id)
        response.status(201)
        response.json({
            success: true,
        })
    }catch(error){
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
    
})
