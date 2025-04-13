import { useParams } from "react-router-dom";
import { useState } from "react";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import ArticleContent from "../components/ArticleContent";
import RelatedArticles from "../components/RelatedArticles";
import { Menu } from "lucide-react";


const dummyArticles = [
  {
    id: "1",
    title: "Breaking News Headline",
    image: "/demo_news.png",
    source: "BBC News",
    date: "April 10, 2025",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
];

const articles = [
  {
    image: "/demo_news.png",
    source: "BBC News",
    title: "New Tech Innovations Changing the World",
    desc: "Technology is evolving faster than ever...",
    date: "April 11, 2025",
  },
  {
    image: "/demo_news.png",
    source: "BBC News",
    title: "Another Trending Headline",
    desc: "Here's why it's making waves...",
    date: "April 11, 2025",
  },
];

const NewsPage = () => {
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const article = dummyArticles.find((item) => item.id === id);

  if (!article) return <div className="p-10">Article not found</div>;

  return (
    <div className="flex">
      {sidebarOpen && <SideBar onClose={() => setSidebarOpen(false)} />}
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? "pl-64" : "pl-4"}`}>
       
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



        <div className="flex px-8 py-6 space-x-6">
          <ArticleContent article={article} />
          <RelatedArticles articles={articles} />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
