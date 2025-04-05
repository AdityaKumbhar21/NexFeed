import { userModel } from "../models/user.model.js"
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcrypt";

export const signup =async (req, res)=>{
    try {
        const {fullname, email, password} = req.body;

        const user = await userModel.findOne({email});

        if(user){
            return res.status(400).json({message: "User already exists"});
        }

        else{
            bcrypt.hash(password, 12, async function(err, hash) {
                if(err) return res.status(400).json({message: "error while creating user"});

                const createdUser = await userModel.create({
                    fullname,
                    email,
                    password: hash
                });

                generateToken(res, createdUser._id);
            });
            res.status(200).json({message: "User created successfully"});
        }
    } catch (error) {
        res.status(500).json({message: "Internal server issue"});
        console.log("Error in signing up", error);
        
    }
}


export const login = async(req, res)=>{
    try {
        const {email , password} = req.body;

        const user = await userModel.findOne({email});

        if(!user){
            return res.status(400).json({message: "Invalid credentials"});
        }

        bcrypt.compare(password, user.password, (err, result)=>{
            if(err) return res.status(400).json({message: "Error while Logging In"});

            if(!result) return res.status(400).json({message: "Invalid credentials"});

            generateToken(res, user._id);
            
            res.status(200).json({message: "User logged in successfully"});

        })
    } catch (error) {
        res.status(500).json({message: "Internal server issue"});
        console.log("Error in logging in", error);
    }
}


export const logout = (req,res)=>{
   try {
    res.cookie("token", "") 
    return res.status(200).json({message: "Logged out successfully"})
   } catch (error) {
        res.status(500).json({message: "Internal server issue"});
        console.log("Error in logging out", error);
   }
}