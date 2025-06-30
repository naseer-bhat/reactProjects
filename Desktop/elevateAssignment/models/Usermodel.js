import argon2 from 'argon2'
import {Schema,model} from 'mongoose'
const UserSchema= new Schema({
  name:{type: String,required:true,trim:true},
  email:{type:String,required:true,trim:true},
  password:{type:String,required:true},
})

UserSchema.pre('save',async function (next){
  if(!this.isModified('password')) return next()
    try {
      this.password= await argon2.hash(this.password)
      next()
    } catch (error) {
      next(error)
    }
})

UserSchema.methods.comparePassword= async function(userPassword){
  return await argon2.verify(this.password,userPassword)
}

export default model('User',UserSchema)
