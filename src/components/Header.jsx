import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { title: "Home", path: "/" },
  {
    title: "About Us",
    path: "/about",
    subItems: [{ title: "About SSITM", path: "/about/about-ssitm" }],
  },
  {
    title: "Courses",
    path: "/courses",
    subItems: [
      { title: "All Courses", path: "/courses/AllCourses" },
      { title: "Undergraduate", path: "/courses/undergraduate" },
      { title: "Postgraduate", path: "/courses/postgraduate" },
      { title: "Diploma", path: "/courses/diploma" },
    ],
  },
  {
    title: "Admission",
    path: "/admission",
    subItems: [
      { title: "Admission Process", path: "/admission/admission-process" },
      { title: "Eligibility Criteria", path: "/admission/eligibility" },
      {
        title: "Fee Structure", path: "/admission/fee-structure" },
    ],
  },
  { title: "Contact Us", path: "/contact-us" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);
  const menuRef = useRef(null);

  const toggleSubmenu = (index) => {
    setMobileOpenSubmenu(mobileOpenSubmenu === index ? null : index);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
    setMobileOpenSubmenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeAllMenus}>
            <img src={logo} alt="SSITM logo" className="h-12 w-auto" />
          </Link>

          <ul className="hidden md:flex space-x-6 text-md items-center" ref={menuRef}>
            {navItems.map((item, index) => (
              <li key={item.path} className="relative group">
                {item.subItems ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => setOpenSubmenu(index)}
                      onFocus={() => setOpenSubmenu(index)}
                      className="flex items-center text-gray-700 hover:text-red-400 px-2 py-1"
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                          openSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 ${
                        openSubmenu === index ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                      onMouseEnter={() => setOpenSubmenu(index)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      {item.subItems.map((subItem) =>
                        subItem.target ? (
                          <a
                            key={subItem.path}
                            href={subItem.path}
                            target={subItem.target}
                            rel={subItem.rel}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-red-400"
                            onClick={closeAllMenus}
                          >
                            {subItem.title}
                          </a>
                        ) : (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-red-400"
                            onClick={closeAllMenus}
                          >
                            {subItem.title}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-red-400 px-2 py-1"
                    onClick={closeAllMenus}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-screen" : "max-h-0"}`}>
          <ul className="pt-2 pb-4 space-y-1">
            {navItems.map((item, index) => (
              <li key={item.path}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="flex items-center justify-between w-full px-3 py-3 hover:bg-gray-50 active:bg-gray-100"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          mobileOpenSubmenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileOpenSubmenu === index ? "max-h-96" : "max-h-0"}`}>
                      <ul className="pl-4 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.path}>
                            {subItem.target ? (
                              <a
                                href={subItem.path}
                                target={subItem.target}
                                rel={subItem.rel}
                                className="block px-3 py-3 hover:bg-gray-50"
                                onClick={closeAllMenus}
                              >
                                {subItem.title}
                              </a>
                            ) : (
                              <Link
                                to={subItem.path}
                                className="block px-3 py-3 hover:bg-gray-50"
                                onClick={closeAllMenus}
                              >
                                {subItem.title}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-3 hover:bg-gray-50"
                    onClick={closeAllMenus}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
