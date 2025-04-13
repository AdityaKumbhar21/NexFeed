import React from 'react';

function TrendingCard({ news }) {
  return (
    <div className="relative">
      <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded-md" />
      <div className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 rounded">
        Trending #{news.trending}
      </div>
      <h3 className="font-bold mt-2">{news.title}</h3>
      <p className="text-sm text-gray-600">{news.description}</p>
    </div>
  );
}

export default TrendingCard;
