import mongoose from "mongoose";


export const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`Mongo DB successfully connected on ${connection.connection.host}`);
        
    } catch (error) {
        console.log("Error in DB connection ", error);
    }
}