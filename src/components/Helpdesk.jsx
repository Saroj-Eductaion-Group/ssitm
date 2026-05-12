import React, { useEffect, useState } from 'react';

const HelpDesk = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 sm:bottom-8 sm:left-8 sm:translate-x-0 z-40">
      <a
        href="tel:18001807686"
        className="bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white mr-2 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
        <div className="flex flex-col font-medium">
          <span className="text-xs leading-tight">Admission Help Desk</span>
          <span className="text-sm font-bold leading-tight">1800-180-7686</span>
        </div>
      </a>
    </div>
  );
};

export default HelpDesk;
