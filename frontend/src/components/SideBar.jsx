import { X } from "lucide-react"; // lucide icon for close
import React from "react";

const SideBar = ({ onClose }) => {
  return (
    <aside className="w-64 h-screen shadow-md fixed top-0 left-0 flex flex-col bg-white z-50">
      {/* Header with Logo and Close */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
          <h2 className="text-xl font-bold">NeXFeed</h2>
        </div>
        <button onClick={onClose}>
          <X className="h-5 w-5 text-gray-600 hover:text-black" />
        </button>
      </div>

      {/* Centered Login Button */}
      <div className="flex-1 flex items-center justify-center">
        <nav className="space-y-3">
          <a
            href="/login"
            className="block px-3 py-2 w-40 text-center rounded hover:bg-gray-800 bg-black text-white text-sm"
          >
            Login
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
