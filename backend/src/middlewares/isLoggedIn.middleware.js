import jwt from "jsonwebtoken";
import {userModel} from "../models/user.model.js"

export const isLoggedIn = async (req, res, next)=>{
    try {
       const token = req.cookies.token;

       if(!token){
        return res.status(403).josn({message: "Unauthorized Access"});
       }

       const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

       if(!decoded) return res.status(400).json({message: "Inavlid token"});

       const user = await userModel.findById(decoded.userId).select("-password");
       req.user = user;
       next();
    } catch (error) {
        console.log("Error in auth middleware", error);
        return res.status(500).json({message: "Internal server error"});
    }
}