import User from "../models/user.model.js";
import { sendToken } from "../utils/jwt.js";
import { compare } from "bcrypt";
import ErrorHandler from "../utils/utility.js";


export const newUser = async(req,res)=>{
    const avatar = {
        public_id: "sample_id",
        url: "sample_url"
    }
    const {name,username,password}=req.body;
    let user = await User.findOne({username})
    if(user){
        return res.status(400).json({
            success: false,
            message: "User already exists"
        })
    }
    user = await User.create({name,username,password,avatar})
    sendToken(res,user,"User created successfully",201)
}

export const login = async(req,res,next)=>{
    const {username,password}=req.body;
    const user = await User.findOne({username}).select("+password")
    if(!user)
        return next(new ErrorHandler("Invalid username",400))
    const isPasswordMatch = await compare(password,user.password)
    if(!isPasswordMatch){
        return next(new ErrorHandler("Invalid password",400))
    }
    sendToken(res,user,`Welcome back ${user.username}`,200)
}

export const getUserProfile = async(req,res,next)=>{
    const user = await User.findById(req.user)

    res.status(200).json({
        success: true,
        user
    })
}

export const logout = async(req,res,next)=>{
    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "Logged out"
    })
}

export const searchUser = async(req,res,next)=>{
    const {name} = req.query
    const users = await User.find({username: {$regex: keyword, $options: "i"}})
    res.status(200).json({
        success: true,
        users
    })
}