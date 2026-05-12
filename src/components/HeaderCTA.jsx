import React from 'react';

const HeaderCTA = () => {
  return (
    <div className="overflow-hidden py-2 bg-orange-600">
      <div className="animate-marquee whitespace-nowrap text-center text-white text-sm font-medium tracking-wide sm:animate-none">
        🎓 Admissions Open 2025–26 — Secure your seat at SSITM Aligarh &nbsp;|&nbsp; AKTU Affiliated &nbsp;|&nbsp; AKTU Code: 007 &nbsp;|&nbsp; Toll Free: 1800-180-7686
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @media (max-width: 640px) {
          .animate-marquee {
            display: inline-block;
            animation: marquee 8s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderCTA;
