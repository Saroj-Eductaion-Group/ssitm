import { useState, useEffect } from 'react';

const floatAnimation = `
  @keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
`;

const AITag = ({ icon, title, description, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 ${isActive ? 'scale-105' : 'hover:scale-100'}`}
    >
      <div className={`absolute -top-3 -right-3 bg-green-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        ✓
      </div>
      <div className={`p-4 rounded-xl shadow-lg ${isActive ? 'bg-orange-500 text-white' : 'bg-white text-orange-800'} border-2 ${isActive ? 'border-orange-600' : 'border-orange-200'} hover:shadow-xl transition-all`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isActive ? 'bg-orange-600' : 'bg-orange-100'}`}>
            {icon}
          </div>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        {isActive && (
          <p className="mt-2 text-sm opacity-90">{description}</p>
        )}
      </div>
    </div>
  );
};

const AiEnabledAdmissions = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [isFloating, setIsFloating] = useState(true);

  //Tags to display
  const tags = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Smart Matching",
      description: "Our AI matches you with programs that fit your unique profile and goals"
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Learning Analysis",
      description: "AI evaluates your learning patterns to recommend optimal study paths"
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Admission Predictor",
      description: "Get AI-powered chances of admission based on historical data"
    },
 
  ];

  // Auto-rotate active tag
  useEffect(() => {
    if (isFloating) {
      const interval = setInterval(() => {
        setActiveTag(prev => {
          if (prev === null) return 0;
          return (prev + 1) % tags.length;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isFloating, tags.length]);

  return (
    <>
      <style>{floatAnimation}</style>
      <div className="relative min-h-[400px] bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-orange-300"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

       {/* Main heading... */}
      <h2 className="text-3xl font-bold text-orange-900 mb-2 relative z-10">
        AI-Enabled Admissions
      </h2>
      <p className="text-orange-700 mb-8 max-w-lg relative z-10">
        Our platform uses advanced AI to enhance your learning and admission journey
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {tags.map((tag) => (
          <AITag
            key={tag.id}
            icon={tag.icon}
            title={tag.title}
            description={tag.description}
            isActive={activeTag === tag.id - 1}
            onClick={() => {
              setIsFloating(false);
              setActiveTag(tag.id - 1);
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default AiEnabledAdmissions;