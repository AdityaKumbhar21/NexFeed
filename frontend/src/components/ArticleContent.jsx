import React from 'react'

const ArticleContent = ({ article }) => {
    return (
      <main className="flex-1 bg-white rounded-lg shadow p-6">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
        <div className="text-sm text-gray-500 mb-2">
          {article.source} • {article.date}
        </div>
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        <div className="border-b border-gray-300 mb-4"></div>
        <p className="text-gray-700 mb-6 italic">{article.description}</p>
        <div className="border-b border-gray-300 mb-4"></div>
        <div className="text-gray-800 whitespace-pre-line leading-relaxed text-justify">
          {article.content}
        </div>
      </main>
    );
  };

export default ArticleContent;