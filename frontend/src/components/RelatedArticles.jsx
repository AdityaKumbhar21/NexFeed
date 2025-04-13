import React from "react"; 
import NewsCard from "./NewsCard";

const RelatedArticles = ({ articles }) => {
  return (
    <aside className="w-full lg:w-80 space-y-4">
      <h3 className="text-xl font-semibold mb-2">Related Articles</h3>
      {articles.map((article) => (
        <div
          className="bg-white shadow-md rounded-lg p-4 mb-4 max-w-xs border-1 border-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
          key={article.id}
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-32 object-cover rounded-md mb-4"
          />
          <p className="text-xs text-gray-500 font-medium mb-2">{article.source}</p> {/* Added source */}
          <h3 className="text-sm font-semibold text-gray-800 mb-2">{article.title}</h3>
          <p className="text-xs text-gray-500">{article.date}</p>
          <p className="text-xs text-gray-600 mt-2">{article.description}</p>
        </div>
      ))}
    </aside>
  );
};

export default RelatedArticles;
