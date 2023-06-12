const express = require('express')
const router = express.Router()
const allNotse = require("../Controller/noteController")


// define the home page route

  router.get("/nots",allNotse.getAllnots)


  router.post("/nots/saveNote",allNotse.saveNote)


  router.put("/nots/updateNote",allNotse.updateNote)


  router.delete("/nots/deleteNote",allNotse.deleteNote)









  module.exports = router ;