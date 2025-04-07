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

        if(!categories || categories.length === 0){
            return res.status(200).json({message: "No categories saved"});
        }

        const categoryParams = categories.join(',');
        
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params:{
                apiKey,
                language: "en",
                category: categoryParams
            }
        })

        const news  = response.data.news;

        res.status(200).json(news);

    } catch (error) {
        console.log("Error in getting the category news ", error);
        res.status(500).json({message: "Internal server issue"});
        
    }
}

export const saveArticle = async(req, res)=>{
    try {
        const {id,title,description,author,image,language,published} = req.body;
        const userId = req.user._id;

        const newsPref = await newsModel.findOne({userId});

        if(newsPref){
            const prevStored = newsPref.savedArticles.some(article => article.id === id);

            if(!prevStored){
                newsPref.savedArticles.push({
                    id, title, description, author, image, language, published
                });
                await newsPref.save();

                return res.status(200).json({message: "Article saved successfully"});
            }

            else{
                return res.status(400).json({message: "Article already saved"});
            }
        }
        else{
            const createdNews = await newsModel.create({
                userId,
                savedArticles: [{
                    id, title, description, author, image, language, published
                }],
        });

            await createdNews.save();
            return res.status(200).json({message: "Article saved successfully"});
        }


    } catch (error) {
        console.log("Error in saving the article ", error);
        res.status(500).json({message: "Internal server issue"});
    }
}

export const getAllSavedArticles = async (req, res)=>{
    try {
        const userId = req.user._id;
        const newsUser = await newsModel.findOne({userId});

        const savedNews = newsUser.savedArticles;

        if(!savedNews || savedNews.length === 1){
            return res.status(400).json({message: "No saved articles"});
        }   
        const news = savedNews.slice(1);
        
        res.status(200).json(news);
    } catch (error) {
            console.log("Error in getting saved articles ", error);
            res.status(500).json({message: "Internal server issue"});
    }
}