import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNavOpen(!navOpen);
  const closeMenu = () => setNavOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", name: "Home", icon: <FaHome /> },
    { id: "about", name: "About", icon: <FaUser /> },
    { id: "skills", name: "Skills", icon: <FaCode /> },
    { id: "projects", name: "Projects", icon: <FaProjectDiagram /> },
    { id: "contact", name: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav
      className={`fixed w-full h-20 flex justify-between items-center px-4 md:px-8 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-transparent"
      }`}
    >
      {/* Logo/Brand */}
      <div className="flex items-center">
        <div className="overflow-hidden">
          <div className="flex flex-col">
            <span className="quoteText text-xl md:text-2xl text-gray-600 font-bold italic opacity-100 hover:text-blue-600 transition-colors duration-300">
              Great things take time
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-2">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-center py-3 px-4 rounded-full text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group transform hover:-translate-y-1"
            >
              <span className="mr-2 text-blue-500 group-hover:text-white transition-colors">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={handleClick}
        className={`md:hidden z-20 cursor-pointer p-3 rounded-full transition-all ${
          navOpen
            ? "bg-gradient-to-r from-blue-500 to-purple-500"
            : "bg-blue-100"
        }`}
      >
        {!navOpen ? (
          <FaBars size={24} className="text-blue-600" />
        ) : (
          <FaTimes size={24} className="text-white" />
        )}
      </div>

      {/* Compact Mobile Menu */}
      <div
        className={`fixed top-20 right-4 w-56 rounded-xl shadow-2xl flex flex-col transition-all duration-300 z-40 ${
          navOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        } bg-white border border-gray-200 overflow-hidden`}
      >
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="border-b border-gray-100 last:border-b-0"
            >
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className="flex items-center px-6 py-4 text-gray-700 hover:bg-blue-50 transition-all duration-200 group"
              >
                <span className="mr-3 text-blue-500 group-hover:text-blue-600 transition-colors">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
