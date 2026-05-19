import React from 'react';

const Resume = () => {
  const experiences = [
    {
      company: 'Aspirasys, Chennai',
      role: '1-Month Internship in Web Development, AI Tools & Deployment',
      period: 'Sep 2025 – Oct 2025',
      description: 'Successfully completed a 1-month internship at Aspirasys, gaining hands-on experience in web development, AI tools, and deployment platforms while building real-world projects including a personal portfolio website.',
    }
  ];

  return (
    <section id="resume" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-3xl font-bold flex items-center gap-4">
            <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
            Work Experience
          </h2>
          <a
            href="Muhammed_Shahid_P_Frontend_Developer_Resume.pdf"
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800">
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-purple-500 -translate-x-[3px]"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-0">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <div className="flex flex-col md:items-end gap-2">
                  <span className="text-purple-400 font-medium">{exp.period}</span>
                  <a
                    href="/Certificate of 1 Month Internship.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-white transition-all text-xs text-center"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
              <h4 className="text-lg text-slate-300 mb-4">{exp.company}</h4>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
