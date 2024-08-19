import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config() 

const cookieOptions = {
    httpOnly:true,
    maxAge:process.env.COOKIE_EXPIRE*24*60*60*1000 || 5*24*60*60*1000,
    sameSite:"none",
}

const sendToken =(res,user,message,code)=>{
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)
    res.status(code).cookie("token",token,cookieOptions).json({
        success:true,
        message,
    })
}

export {sendToken}