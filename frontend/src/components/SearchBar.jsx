import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"; // Import Search icon from lucide-react

const SearchBar = () => {
  return (
    <div>
      <div className="relative w-full">
        {/* Input field with icon on the left */}
        <Input
          type="text"
          placeholder="Search news..."
          className="w-full pl-10 h-10" // Add padding-left for the icon
        />
        {/* Search icon on the left of the input */}
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 size-5" />
      </div>
    </div>
  );
};

export default SearchBar;
