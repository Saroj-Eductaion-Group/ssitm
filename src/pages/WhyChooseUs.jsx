import React from 'react';
import { FaGraduationCap, FaBuilding, FaDollarSign, FaChalkboardTeacher, FaLightbulb, FaGlobe } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const reasonsData = [
{
  id: 1,
  icon: FaGraduationCap,
  title: 'Premier Accredited Excellence',
  description: 'Recognized for top-tier academic standards and quality education, ensuring a valuable degree.',
},
  {
    id: 2,
    icon: FaBuilding,
    title: 'Industry-Ready Curriculum',
    description: 'Programs designed with industry experts, providing skills demanded by today\'s job market.',
  },
  {
    id: 3,
    icon: FaDollarSign,
    title: 'High Placement Rate',
    description: 'Proven track record of successful placements in leading companies across various sectors.',
  },
  {
    id: 4,
    icon: FaChalkboardTeacher,
    title: 'Experienced Faculty',
    description: 'Learn from highly qualified professors with extensive industry experience and academic expertise.',
  },
  {
    id: 5,
    icon: FaLightbulb,
    title: 'Innovation & Research',
    description: 'Foster creativity and problem-solving through advanced labs and dedicated innovation hubs.',
  },
  {
    id: 6,
    icon: FaGlobe,
    title: 'Global Exposure',
    description: 'Opportunities for international collaborations, exchange programs, and diverse learning experiences.',
  },
];

const ReasonCard = ({ reason }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-orange-200
                  text-center transform transition-all duration-700 ease-out
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex justify-center mb-4">
        <reason.icon className="text-orange-600 text-5xl sm:text-6xl" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{reason.title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">{reason.description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="bg-orange-50 bg-opacity-70 py-8 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 relative pb-2">
          <span className="border-l-4 border-orange-500 pl-4">WHY CHOOSE  </span><span className="text-orange-500">SSITM?</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasonsData.map((reason) => (
            <ReasonCard key={reason.id} reason={reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;