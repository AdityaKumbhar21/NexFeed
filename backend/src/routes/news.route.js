import {Router} from "express";
import { getAllNews , saveCategories, getCategoryNews, saveArticle, getAllSavedArticles} from "../controllers/news.controller.js";
import {isLoggedIn} from "../middlewares/isLoggedIn.middleware.js"

const newsRouter = Router();


newsRouter.get('/all-news',getAllNews);
newsRouter.post('/store-categories', isLoggedIn, saveCategories);
newsRouter.get('/get-category-news', isLoggedIn, getCategoryNews);
newsRouter.post('/save-article', isLoggedIn, saveArticle);
newsRouter.get('/get-saved-articles', isLoggedIn, getAllSavedArticles);


export default newsRouter;
