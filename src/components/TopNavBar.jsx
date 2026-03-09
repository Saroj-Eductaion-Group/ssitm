import { Link } from "react-router-dom";
import { BookOpen, PhoneCall, Facebook, Instagram, Linkedin, CreditCard, Users } from "lucide-react";  
import SearchBar from "./SearchBar";

const TopNav = () => {
  return (
    <div className="hidden md:flex p-3 bg-orange-500 text-md gap-4 justify-center items-center">
      <div className="flex items-center text-white font-bold">
        <PhoneCall className="w-4 h-4 mr-2" />
        <span>Toll Free No: 1800-180-7686</span>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="https://www.facebook.com/ssitmalg"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:scale-110 transition-transform"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a 
          href="https://www.instagram.com/ssitmalg"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:scale-110 transition-transform"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>

        <a href="https://www.linkedin.com/company/ssitmalg"
        target ="_blank"
        className="text-white hover:scale-110 transition-transform"
        >
          <Linkedin className="w-5 h-5" />
        </a>

      </div>

     
      <a 
        href="https://alumni.seglko.org"
        className="flex items-center text-white font-bold hover:text-orange-200 transition-colors" target= "_blank"
      >
        <Users className="w-4 h-4 mr-2" /> 
        <span>Alumni</span>
      </a>

      
      <Link 
        to="/fee-payment"  
        className="flex items-center bg-orange-700 rounded-full shadow-lg group transition-all hover:scale-105 hover:shadow-xl"
      >
        <div className="bg-orange-800 p-2 px-3 rounded-full text-white group-hover:bg-orange-900">
          <CreditCard className="w-5 h-5" />  
        </div>
        <span className="text-white font-bold text-base py-2 pr-4 pl-2">
          Pay Fee Online
        </span>
      </Link>

 
      <a
        href="https://seglko.in8.nopaperforms.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-orange-700 rounded-full shadow-lg group transition-all hover:scale-105 hover:shadow-xl"
      >
        <div className="bg-orange-800 p-2 px-3 rounded-full text-white group-hover:bg-orange-900">
          <BookOpen className="w-5 h-5" />
        </div>
        <span className="text-white font-bold text-base py-2 pr-4 pl-2">
          Apply Now
        </span>
      </a>

      <div>
        <span className="text-white font-extrabold text-xl">AKTU Code: 007</span>
      </div>
      <div>
        <SearchBar/>
      </div>
    </div>
  );
};

export default TopNav;