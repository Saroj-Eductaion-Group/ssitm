import React from 'react';

const admissionsData = [
  {
    category: 'Artificial Intelligence',
    programs: [
      { name: 'B.Tech - CSE (Artificial Intelligence)', status: 'Open' },
      { name: 'B.Tech - CSE (AI & Machine Learning)', status: 'Limited Seats' },
    ],
  },
  {
    category: 'Pharmacy',
    programs: [
      { name: 'Diploma in Pharmacy (D.Pharma)', status: 'Open' },
      { name: 'Bachelor of Pharmacy (B.Pharma)', status: 'Open' },
    ],
  },
  {
    category: 'Undergraduate',
    programs: [
      { name: 'Bachelor of Computer Applications (BCA)', status: 'Open' },
      { name: 'B.Tech - Computer Science & Engineering', status: 'Open' },
      { name: 'B.Tech - Electronics & Communication (ECE)', status: 'Open' },
      { name: 'B.Tech - Civil Engineering', status: 'Open' },
    ],
  },
  {
    category: 'Postgraduate',
    programs: [
      { name: 'M.Tech - Computer Science & Engineering', status: 'Open' },
      { name: 'Master of Business Administration (MBA)', status: 'Open' },
      { name: 'Master of Computer Applications (MCA)', status: 'Open' },
    ],
  },
];

const statusStyles = {
  open: 'bg-green-100 text-green-700',
  'limited seats': 'bg-yellow-100 text-yellow-700',
  upcoming: 'bg-gray-100 text-gray-600',
  closed: 'bg-red-100 text-red-700',
};

const AdmissionsBatch = ({ category, programs }) => (
  <div className="relative flex flex-col justify-between bg-white rounded-xl shadow-lg p-6 pt-8 border border-gray-200 min-h-[280px]">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-600 border border-orange-600 bg-orange-50 text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
      {category}
    </div>
    <ul className="list-none p-0 m-0 space-y-3 flex-grow mt-2">
      {programs.map((program, index) => (
        <li key={index} className="flex justify-between items-center text-sm text-gray-600 border-b border-dashed border-gray-200 pb-2 last:border-b-0 gap-2">
          <span className="flex-1">{program.name}</span>
          {program.status && (
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold shrink-0 ${statusStyles[program.status.toLowerCase()] || 'bg-red-100 text-red-700'}`}>
              {program.status}
            </span>
          )}
        </li>
      ))}
    </ul>
    <a
      href="https://seglko.in8.nopaperforms.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 block w-full py-2 px-4 bg-orange-600 text-white text-center font-medium rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
    >
      Apply Now
    </a>
  </div>
);

const AdmissionsOpen = () => (
  <div className="font-sans bg-gray-50 text-gray-800 px-4 py-12">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
        UG / PG / Diploma Admissions Open 2025–26
      </h2>
      <p className="mt-3 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
        Explore our programs and their current admission status for the upcoming academic session.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {admissionsData.map((batch, index) => (
        <AdmissionsBatch key={index} category={batch.category} programs={batch.programs} />
      ))}
    </div>
  </div>
);

export default AdmissionsOpen;
