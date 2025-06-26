import express from 'express'
import dotenv from 'dotenv'
import connectToDb from './config/db.js'
import studentRoutes from './routes/student.routes.js'
import instructorRoutes from './routes/instructor.routes.js'
import adminRoutes from './routes/admin.routes.js'
dotenv.config()
const app=express()
app.use(express.json())
const port=process.env.PORT
app.use('/api/admin',adminRoutes)
app.use('/api/instructor',instructorRoutes)
app.use('/api/student',studentRoutes)
const startServer= async()=>{
    try {
        await connectToDb(process.env.DBURI)
        app.listen(port,()=>{
    
    console.log(`server is listening at port ${port}`)
})
    } catch (error) {
        console.log('failed to start Server',error.message)
        process.exit(1)
    }
}
startServer()
