import ErrorHandler from "../utils/utility.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return next(new ErrorHandler("Not logged in", 401));
  }

  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedData);
    req.user = decodedData._id
    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid token", 401));
  }

};

export default isAuthenticated