import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Merti Haji Ismail sahib Arts & Science College, Pernambut',
      period: '2024 – Present',
      description: `I am pursuing a Bachelor of Computer Applications (BCA) at Merti Haji Ismail sahib Arts & Science College, Pernambut, Vellore District (2024–2027), where I am building a strong foundation in computer programming, web development, and software development concepts.`,
    },
    {
      degree: 'Computer Science',
      institution: 'Parudur Higher Secondary School, Kerala',
      period: 'March 2023',
      description: 'I completed my Higher Secondary Education (HSE) in Computer Science at HSE School, Parudur,which sparked my interest in pursuing a career in the IT field.',
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <h4 className="text-lg text-slate-400 mb-4">{edu.institution}</h4>
              <p className="text-slate-500 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
