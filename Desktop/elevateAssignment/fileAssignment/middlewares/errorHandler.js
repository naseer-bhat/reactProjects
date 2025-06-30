
export const globalErrorHandler=(err,req,res,next)=>{
  if(err){
    console.log(err.message)
  }
  statusCode= err.statusCode
  res.status(statusCode).json({
    success:false,
    msg:err.message
  })
  next()
}