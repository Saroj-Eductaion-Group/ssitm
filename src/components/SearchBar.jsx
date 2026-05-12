import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { title: 'Home', path: '/' },
  {
    title: 'About Us',
    subItems: [{ title: 'About SSITM', path: '/about/about-ssitm' }],
  },
  {
    title: 'Courses',
    subItems: [
      { title: 'All Courses', path: '/courses/AllCourses' },
      { title: 'Undergraduate', path: '/courses/undergraduate' },
      { title: 'Postgraduate', path: '/courses/postgraduate' },
      { title: 'Diploma', path: '/courses/diploma' },
    ],
  },
  {
    title: 'Admission',
    subItems: [
      { title: 'Admission Process', path: '/admission/admission-process' },
      { title: 'Eligibility Criteria', path: '/admission/eligibility' },
      { title: 'Fee Structure', path: '/admission/fee-structure' },
    ],
  },
  { title: 'Contact Us', path: '/contact-us' },
];

const flattenNavItems = (items) => {
  const list = [];
  items.forEach(item => {
    if (item.path) list.push({ name: item.title, link: item.path, category: 'Main Menu' });
    if (item.subItems) {
      item.subItems.forEach(sub => list.push({ name: sub.title, link: sub.path, category: item.title }));
    }
  });
  return list;
};

const allItems = flattenNavItems(navItems);

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) { setFilteredItems([]); setOpen(false); return; }
    setFilteredItems(allItems.filter(item => item.name.toLowerCase().includes(q)));
    setOpen(true);
  }, [query]);

  useEffect(() => {
    const handleClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSelect = (link) => {
    navigate(link);
    setQuery('');
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search pages..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full py-2 pl-10 pr-4 text-gray-900 bg-gray-100 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 text-sm"
        />
      </div>

      {open && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 border border-gray-100 overflow-hidden">
          {filteredItems.length > 0 ? (
            <ul className="divide-y divide-gray-100 max-h-72 overflow-y-auto">
              {filteredItems.map(item => (
                <li key={item.link}>
                  <button
                    onClick={() => handleSelect(item.link)}
                    className="flex flex-col w-full text-left px-4 py-3 hover:bg-orange-50 transition-colors duration-150"
                  >
                    <span className="font-medium text-gray-800 text-sm">{item.name}</span>
                    <span className="text-xs text-gray-400 mt-0.5">{item.category}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 text-sm italic py-4">No results found for "{query}"</p>
          )}
        </div>
      )}
    </div>
  );
}
