const NewsCard = ({ image, source, title, description, date }) => {
  return (
    <div className="flex border border-black hover:shadow-md rounded-lg overflow-hidden transition-shadow duration-300 w-full h-[180px]">
      
      {/* Left - Image */}
      <div className="w-1/3 p-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right - Content */}
      <div className="w-2/3 p-2 flex flex-col justify-between gap-1">
        <p className="text-xs text-gray-500">{source}</p>
        <h2 className="text-sm font-semibold line-clamp-1">{title}</h2>
        <p className="text-xs text-gray-700 line-clamp-1">{description}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
