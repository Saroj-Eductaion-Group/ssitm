import chairmanImg from '../assets/chairman.jpg'

const ChairmanMessage = () => {
  return (
    <div className="bg-orange-50">
      <div className="container mx-auto px-4 py-16">
      
        {/* Main Content */}
        <div className="bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden animate-slide-up-delay">
          <div className="grid lg:grid-cols-3 gap-8 p-8 md:p-12">
            {/* Message Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Chairman message heading  */}
              <div className="bg-white/10  overflow-hidden animate-fade-in">
                 
                  <h1 className="text-center text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 pb-2 relative z-10 animate-slide-down">
                   <span className="border-l-4 border-orange-500 pl-4">CHAIRMAN's <span className="text-orange-500">MESSAGE</span></span>
                </h1>
                  
                  <div className="h-1 bg-white/50 mx-auto mt-6 rounded-full animate-grow-width"></div>
                
              </div>

              <div className="text-md leading-relaxed space-y-6">
                <p className="animate-fade-in-delay-200">
                  It gives me immense pleasure to welcome you to the{" "}
                  <span className="font-semibold text-blue-800">Saroj Educational Group (SEG)</span>, a beacon of
                  knowledge and a nurturing ground for future leaders. Since our inception, SEG has remained steadfast
                  in its mission to impart quality education, develop practical skills, and instill a sense of
                  responsibility in our students.
                </p>
              </div>

              {/* Quote Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-l-4 border-blue-600 relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] animate-fade-in-delay-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute top-4 right-4 text-blue-200 w-12 h-12"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <p className="text-xl italic text-blue-800 font-medium leading-relaxed">
                  "Education is the key to empowerment, and at SEG, we strive to ignite the spark of curiosity,
                  creativity, and courage in every learner."
                </p>
              </div>

              <div className="text-md leading-relaxed animate-fade-in-delay-500">
                <p>
                  I firmly believe that education is the key to empowerment, and at SEG, we strive to ignite the spark
                  of curiosity, creativity, and courage in every learner. I invite you to be a part of this remarkable
                  journey of knowledge, growth, and transformation.
                </p>
              </div>
            </div>

            {/* Chairman Profile */}
            <div className="lg:col-span-1 animate-fade-in-delay-700">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg h-full">
                <div className="text-center mb-8 transition-transform duration-300 hover:scale-[1.05]">
                  <div className="relative inline-block">
                    <img
                      src={chairmanImg}
                      alt="Mr. Sunil Singh - Chairman"
                      className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-600 shadow-xl mx-auto"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-badge-pop">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-blue-800">Mr. Sunil Singh</h3>
                  <p className="text-blue-600 font-semibold">Chairman & Founder</p>

                  <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full animate-grow-width-delay-800"></div>

                  <p className="leading-relaxed">
                    Leading SEG with vision, dedication, and commitment to excellence in education for over two decades.
                  </p>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes growWidth {
          from { width: 0; }
          to { width: 100px; }
        }
        @keyframes badgePop {
          0% { transform: scale(0); }
          70% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slide-down {
          animation: slideDown 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-grow-width {
          animation: growWidth 1s ease-out forwards;
        }
        .animate-badge-pop {
          animation: badgePop 0.8s ease-out forwards;
        }
        .animate-slide-up-delay {
          animation: slideUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-200 {
          animation: fadeIn 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-300 {
          animation: fadeIn 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-400 {
          animation: fadeIn 0.8s ease-out 1s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-500 {
          animation: fadeIn 0.8s ease-out 1.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-600 {
          animation: fadeIn 0.8s ease-out 1.4s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-700 {
          animation: fadeIn 0.8s ease-out 1.6s forwards;
          opacity: 0;
        }
        .animate-grow-width-delay {
          animation: growWidth 0.8s ease-out 1.8s forwards;
          width: 0;
        }
        .animate-grow-width-delay-800 {
          animation: growWidth 0.8s ease-out 2s forwards;
          width: 0;
        }
      `}</style>
    </div>
  );
};

export default ChairmanMessage;