import jwt from "jsonwebtoken";

export const generateToken = (res, userId)=>{
    try {
        const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY, {
            expiresIn: "7d"
        });


        res.cookie("token", token, {
            maxAge: 7*24*60*60*1000,
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict"
        });



    } catch (error) {
        console.log("error in gen token", error);
        res.status(500).json({message: "Internal server issue"});
    }
}