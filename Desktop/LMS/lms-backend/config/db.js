import {connect } from 'mongoose'
 const connectToDb= async(url)=>{
    try {
        await connect(url)
        console.log('Connected to mongodb')
    } catch (error) {
        console.log('database connection failed',error.message)
        process.exit(1)
    }
}
export default connectToDb