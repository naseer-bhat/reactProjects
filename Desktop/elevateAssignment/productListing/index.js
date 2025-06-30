
import express from 'express'
import router from './routes/pagination.route.js'
const app= express()
const port = 3000
app.use('/api', router);
app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})