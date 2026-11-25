import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Merit Haji Ismail Sahib Arts & Science College, Pernambut',
      period: '2024 – 2027',
      status: 'In Progress',
      statusColor: 'emerald',
      description:
        'Pursuing a Bachelor of Computer Applications (BCA) at Merit Haji Ismail Sahib Arts & Science College, Pernambut (2024–2027). Building theoretical and practical foundations in programming, database systems, and web architecture.',
      topics: ['Web Applications', 'Database Systems', 'OOP Concepts', 'Software Engineering', 'Computer Networks'],
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      degree: 'Higher Secondary Education — Computer Science',
      institution: 'Parudur Higher Secondary School, Kerala',
      period: 'March 2023',
      status: 'Completed',
      statusColor: 'cyan',
      description:
        'Completed Higher Secondary Education (HSE) specializing in Computer Science at Parudur Higher Secondary School, Kerala. Built analytical problem-solving and software programming fundamentals that initiated my software career.',
      topics: ['CS Fundamentals', 'Algorithmic Thinking', 'Problem Solving', 'Computational Math'],
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="education" className="py-14 sm:py-16 relative bg-[#070b1e]/60 border-t border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dev-card text-xs font-mono text-cyan-400 border border-white/10 mb-2 shadow-sm">
              <span>05</span>
              <span className="w-1 h-1 rounded-full bg-purple-400" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight">
              Education &{' '}
              <span className="italic bg-linear-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Academic Background.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed font-sans">
            Formal computer science training and ongoing academic coursework providing analytical and practical software engineering backing.
          </p>
        </div>

        {/* Compact Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-2xl dev-card-interactive border border-white/10 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-2.5">
                    {/* Academic Icon */}
                    <div className="w-9 h-9 rounded-xl dev-card flex items-center justify-center border border-white/10 shrink-0">
                      {edu.icon}
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        edu.statusColor === 'emerald'
                          ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                          : 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                      }`}
                    >
                      ● {edu.status}
                    </span>
                  </div>

                  {/* Period Chip */}
                  <span className="text-xs font-mono font-semibold text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-sans font-bold text-white mb-0.5 leading-snug">
                  {edu.degree}
                </h3>
                <h4 className="text-xs sm:text-sm text-cyan-300 font-medium mb-2.5">
                  {edu.institution}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed mb-3.5 font-sans">
                  {edu.description}
                </p>
              </div>

              {/* Topics / Focus Areas */}
              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1.5 block">Key Coursework</span>
                <div className="flex flex-wrap gap-1">
                  {edu.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/5 border border-white/5"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
