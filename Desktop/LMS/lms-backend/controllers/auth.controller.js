import User from "../models/user.model.js"
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
export const register=async(req,res)=>{
try{
const{name,email,password,phone,role}=req.body
if(!name|| !email || !password || !phone){
return res.json({msg:'all fields required'})
}
const existingUser= await User.findOne({$or:[{email},{password}]})
if(existingUser) return res.status(400).json({msg:`${email} already exists`})
    const hashedPassword= await argon2.hash(password)
    const user= new User({name,email,password:hashedPassword,phone,role})
await user.save()
res.status(201).json({msg:'User registered successfully'})
}
catch(error){
    res.status(500).json({msg:'server error',error:error.message})
}
}
export const login= async(req,res)=>{
    try {
         const{email,password} =req.body
         if(!email || !password) return res.status(400).json({msg:'invalid username or password'})
            const user= await User.findOne({email})
        if(!user) return res.status(404).json({msg:'user not exists'})
            const verifyPassword= await argon2.verify(user.password,password)
        if(!verifyPassword) return res.status(400).json({msg:'invalid password'})
            const token = jwt.sign({_id:user._id, role:user.role},process.env.JWT_SECRET,{expiresIn:'1d'})
        res.status(200).json({token,user:{name:user.name,email:user.email,role:user.role},msg:'Login Successful'})
    } catch (error) {
            res.status(500).json({ message: "Server error", error: error.message });
    }
   
}