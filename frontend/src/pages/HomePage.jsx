import { useState } from "react";
import { Menu } from "lucide-react";
import NewsCard from "../components/NewsCard";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import TrendingNewsCard from "../components/TrendingNewsCard";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("forYou");
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default to closed on mobile

  return (
    <div className="flex">

    {sidebarOpen && <SideBar onClose={() => setSidebarOpen(false)} />}
      

      {/* Main Content */}
      <main className={`flex-1 p-4 w-full transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-2"}`}>
        {/* Header: Hamburger + Search */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? " " : "pl-4"}`}>
       
        <div className="flex items-center px-4 py-4 space-x-4">
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 bg-black text-white rounded flex items-center justify-center h-10 w-10"
        >
          <Menu className="h-10 w-10 flex items-center justify-center bg-black text-white rounded" />
        </button>
      )}
        <div className="flex-1">
          <SearchBar />
        </div>
      </div>
      </div>

        {/* Tabs */}
        <div className="mb-6 flex border-b border-gray-300">
          <button
            onClick={() => setActiveTab("forYou")}
            className={`w-1/2 flex items-center justify-center gap-2 py-3 text-lg ${
              activeTab === "forYou"
                ? "font-bold border-b-4 border-black"
                : "text-gray-500"
            }`}
          >
            <img src="/for_you.png" alt="For You" className="w-5 h-5" />
            For You
          </button>

          <button
            onClick={() => setActiveTab("trending")}
            className={`w-1/2 flex items-center justify-center gap-2 py-3 text-lg ${
              activeTab === "trending"
                ? "font-bold border-b-4 border-black"
                : "text-gray-500"
            }`}
          >
            <img src="/trending.png" alt="Trending" className="w-5 h-5" />
            Trending
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-4">
          {activeTab === "forYou" ? "Recommended For You" : "Trending News"}
        </h1>

        {/* Trending cards */}
        {activeTab === "forYou" && (
          <div className="flex flex-row space-x-4 space-y-4">
            <TrendingNewsCard
              image="/demo_news.png"
              source="BBC News"
              title="New Tech Innovations Changing...."
              description="Technology is evolving faster than ever......"
              rank="1"
            />
            <TrendingNewsCard
              image="/demo_news.png"
              source="BBC News"
              title="New Tech Innovations Changing...."
              description="Technology is evolving faster than ever......"
              rank="2"
            />
            <TrendingNewsCard
              image="/demo_news.png"
              source="BBC News"
              title="New Tech Innovations Changing...."
              description="Technology is evolving faster than ever......"
              rank="3"
            />
          </div>
        )}

        {/* News Cards */}
        <div className="space-y-4 mt-6">
          <NewsCard
            image="/demo_news.png"
            source="BBC News"
            title="New Tech Innovations Changing the World"
            description="Technology is evolving faster than ever, and these new innovations are reshaping industries."
            date="April 11, 2025"
          />
          <NewsCard
            image="/demo_news.png"
            source="BBC News"
            title="Global Markets Experience Surprising Growth"
            description="The stock market surged today after tech giants announced better-than-expected earnings."
            date="April 11, 2025"
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
