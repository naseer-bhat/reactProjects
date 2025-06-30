
import path from 'path'
import fs from 'fs'

export const logger= (req,res,next)=>{
  let data=`${req.method},${res.statusCode},${req.originalUrl},${new Date().toISOString()}`
  fs.appendFile(path.resolve('logs.csv'),data,(err)=>{
if(err){
      console.log(err)
    }
  })
  // fs.writeFile('log.csv',data,(err)=>{
    
  // })
  console.log(req.method,res.statusCode,req.originalUrl,new Date().toISOString())
  next()
}