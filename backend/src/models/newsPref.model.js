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
        type: [],
        default: [{
            id: "",
            title: "",
            description: "",
            author: "",
            image: "",
            language: "",
            published: ""
        }]
    }

});


export const newsModel = mongoose.model("NewsPreference", newsPrefSchema);
