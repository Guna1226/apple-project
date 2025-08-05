import { useState, useEffect } from "react";
import { Moon, Sun, Search, ChevronDown } from "lucide-react";
import { FaApple } from 'react-icons/fa'; 

const menu = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Accessories",
  "Support",
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header
      className={`fixed w-full z-50 transition-shadow bg-white dark:bg-gray-900 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
       {/* Apple Logo */}
<div className="text-2xl text-black dark:text-white">
  <FaApple className="text-2xl" />
  
</div>


        {/* Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700 dark:text-gray-200">
          {menu.map((item) => (
            <div key={item} className="relative group cursor-pointer">
              <span>{item}</span>
              <ChevronDown className="inline w-4 h-4 ml-1" />
              <div className="absolute hidden group-hover:flex flex-col bg-white dark:bg-gray-800 shadow-lg top-6 left-0 w-40 p-2 rounded-md z-50">
                <span className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded">
                  {item} Link 1
                </span>
                <span className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded">
                  {item} Link 2
                </span>
              </div>
            </div>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="hidden md:flex items-center border rounded-full px-2 py-1 bg-gray-100 dark:bg-gray-800">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent ml-2 outline-none text-sm text-gray-700 dark:text-white"
            />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-800 dark:text-white"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}


