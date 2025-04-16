import React, { useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react"; // Make sure you have this icon package installed

const RelatedArticles = ({ articles }) => {
  const [savedArticles, setSavedArticles] = useState({});

  const toggleSave = (id) => {
    setSavedArticles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    // Optional: add backend/localStorage save logic here
  };

  return (
    <aside className="w-full lg:w-80 space-y-4">
      <h3 className="text-xl font-semibold mb-2">Related Articles</h3>
      {articles.map((article) => (
        <div
          className="relative bg-white shadow-md rounded-lg p-4 mb-4 max-w-xs border border-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
          key={article.id}
        >
          {/* Save button */}
          <button
            onClick={() => toggleSave(article.id)}
            className="absolute top-2 right-2 z-10 p-1 bg-white rounded-full hover:bg-gray-200"
          >
            {savedArticles[article.id] ? (
              <BookmarkCheck size={18} className="text-blue-500" />
            ) : (
              <Bookmark size={18} className="text-gray-500" />
            )}
          </button>

          <img
            src={article.image}
            alt={article.title}
            className="w-full h-32 object-cover rounded-md mb-4"
          />
          <p className="text-xs text-gray-500 font-medium mb-2">{article.source}</p>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">{article.title}</h3>
          <p className="text-xs text-gray-500">{article.date}</p>
          <p className="text-xs text-gray-600 mt-2">{article.description}</p>
        </div>
      ))}
    </aside>
  );
};

export default RelatedArticles;
