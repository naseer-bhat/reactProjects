import express from 'express'
import {logger} from './middlewares/requestLogger.js'
import { globalErrorHandler } from './middlewares/errorHandler.js'
const app=express()
app.use(express.json())
app.use(logger)
app.use(globalErrorHandler)
app.get("/api",(req,res,next)=>{
  try {
    // throw new Error(`error`)
    res.send(`welcome`)
  } catch (error) {
    error.statusCode=500
    next(error)
  }
 
})
app.listen(3000,()=>{
  console.log(`server is listening on port ${3000}`)
})