const TrendingNewsCard = ({ image, title, description, rank }) => {
  return (
    <div
      className="relative w-full h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:brightness-110"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Trending badge */}
      <div className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
        #{rank} Trending
      </div>

      {/* Content at bottom aligned to left */}
      <div className="absolute bottom-4 left-4 right-4 text-white text-left">
        <h2 className="text-md font-bold">{title}</h2>
        <p className="text-xs mt-1">{description}</p>
      </div>
    </div>
  );
};

export default TrendingNewsCard;
