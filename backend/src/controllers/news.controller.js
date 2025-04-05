import axios from "axios";
import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";
import {newsModel} from "../models/newsPref.model.js"
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = "https://api.currentsapi.services/v1/";
const apiKey = process.env.NEWS_API_KEY;

export const getAllNews = async (req, res)=>{
    try {
        const token = req.cookies.token;
        
        let isLoggedIn = false;

        if(token){
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const user  = await userModel.findById(decoded.userId).select("-password");

            if(user){
                isLoggedIn = true;
            }
            
        }

        const limit = isLoggedIn ? 20 : 10;
        
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params:{
                apiKey,
                language: "en"
            },
        });

        const news = response.data.news.slice(0, limit);

        res.status(200).json({
            news,
            isLoggedIn,
            limit
        });
    } catch (error) {
        console.log("Error in get all news ", error);
        res.status(500).json({message: "Internal Server error"});
        
    }
}

export const saveCategories = async (req, res)=>{
    try {
        const {categories} = req.body;
        const userId = req.user._id;


        let preferences = await newsModel.findOne({userId});

        if(!preferences){
            preferences = await newsModel.create({
                userId,
                categories
            });
        }
        else{
            preferences.categories = categories;
            await preferences.save();
            return res.status(200).json({message: "Categories updated successfully", categories})
        }

        res.status(200).json({message: "Categories saved successfully", categories})
    } catch (error) {
        console.log("Error in saving categories: ", error);
        return res.status(500).json({message: "Internal server error"});
    }
}

export const getCategoryNews = async (req, res)=>{
    try {
        const newsPreference = await newsModel.findOne({userId: req.user._id});
        const categories = newsPreference.categories;

        if(!categories){
            return res.status(200).json({message: "No categories saved"});
        }

        const lowerCaseCategories = categories.map(cat => cat.toLowerCase());
        
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params:{
                apiKey,
                language: "en"
            }
        })

        const news  = response.data.news;

        const filteredNews = news.filter(article => lowerCaseCategories.includes(article.category?.toLowerCase()));

        res.status(200).json(filteredNews);

    } catch (error) {
        console.log("Error in getting the category news ", error);
        res.status(500).json({message: "Internal server issue"});
        
    }
}