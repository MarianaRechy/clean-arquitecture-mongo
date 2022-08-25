const express = require("express")
const { login } = require("../usecases/auth.usecase")

const router = express.Router()

router.post("/", async (request, response) => {
  try{
    const { body } = request
    const user = await login(body.email, body.password)
    response.json({
      success: true,
      data: {
        user
      }
    })
  } catch(error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router