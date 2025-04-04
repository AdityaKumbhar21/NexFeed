import mongoose from "mongoose";

const newsPrefSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },

    categories: {
        type: [String], 
        default: []
    }, 

    savedArticles:{
        type: [Strig],
        default: [{
            title: String,
            url:String,
            source:String
        }]
    }

});


export const newsModel = mongoose.model("NewsPreference", newsPrefSchema);
