import { useState, useEffect } from "react";
import { Moon, Sun, Search, ChevronDown, Menu, X } from "lucide-react";
import { FaApple } from 'react-icons/fa'; 

const menuItems = [
  { label: "Store", links: ["Store Link 1", "Store Link 2"] },
  { label: "Mac", links: ["Mac Link 1", "Mac Link 2"] },
  { label: "iPad", links: ["iPad Link 1", "iPad Link 2"] },
  { label: "iPhone", links: ["iPhone Link 1", "iPhone Link 2"] },
  { label: "Watch", links: ["Watch Link 1", "Watch Link 2"] },
  { label: "AirPods", links: ["AirPods Link 1", "AirPods Link 2"] },
  { label: "TV & Home", links: ["TV Link 1", "Home Link 2"] },
  { label: "Accessories", links: ["Accessories Link 1", "Accessories Link 2"] },
  { label: "Support", links: ["Support Link 1", "Support Link 2"] },
];

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-shadow bg-white dark:bg-gray-900 ${scrolled ? "shadow-md" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Apple Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          <FaApple className="text-2xl" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700 dark:text-gray-200">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group cursor-pointer">
              <span className="flex items-center hover:text-blue-600">
                {item.label}
                <ChevronDown className="ml-1 h-4 w-4" />
              </span>
              <div className="absolute hidden group-hover:flex flex-col bg-white dark:bg-gray-800 shadow-lg top-6 left-0 w-48 p-2 rounded-md z-50">
                {item.links.map((link, index) => (
                  <a key={index} href="#" className="hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-1 rounded text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Right Side (Search & Theme) */}
        <div className="flex items-center gap-4">
          {/* Search Input (Desktop Only) */}
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1.5 pr-8 rounded-md bg-gray-100 dark:bg-gray-700 text-sm outline-none focus:ring-2 ring-blue-400 text-gray-900 dark:text-white"
            />
            <Search className="absolute right-2 h-4 w-4 text-gray-500 dark:text-gray-300" />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800 dark:text-white" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-4 pb-4">
          <nav className="flex flex-col space-y-4 text-sm text-gray-800 dark:text-gray-200">
            {menuItems.map((item) => (
              <div key={item.label}>
                <span className="font-semibold">{item.label}</span>
                <div className="ml-4 mt-1 flex flex-col space-y-1">
                  {item.links.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}



