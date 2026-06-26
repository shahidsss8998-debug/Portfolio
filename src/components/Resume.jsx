import React from 'react';

const Resume = () => {
  const experiences = [
    {
      company: 'Aspirasys, Chennai',
      role: '1-Month Internship in Web Development, AI Tools & Deployment',
      period: 'Sep 2025 – Oct 2025',
      description: 'Successfully completed a 1-month internship at Aspirasys, gaining hands-on experience in web development, AI tools, and deployment platforms while building real-world projects including a personal portfolio website.',
      certificateLink: '/Certificate of 1 Month Internship.pdf'
    },
    {
      company: 'Professional Certification',
      role: 'Microsoft Word Certification',
      period: 'Self-Paced',
      description: 'Successfully completed a comprehensive certification in Microsoft Word, demonstrating proficiency in advanced document formatting, styling, and data organization. Gained practical skills in creating professional documents, reports, and templates.',
      certificateLink: '/MsWord_Certificate.pdf'
    },
    {
      company: 'Forage',
      role: 'Software Engineering Job Simulation',
      period: 'June 2026',
      description: 'Completed a hands-on simulation covering full-stack development tasks including modifying a .NET backend, working with a React/Redux frontend, handling client requests, writing unit tests, and creating a pull request — simulating real-world software engineering workflows.',
      certificateLink: '/Forage_SoftwareEngineering Job Simulation_Certificate.pdf'
    },
    {
      company: 'Skyscanner',
      role: 'Front-End Software Engineering',
      period: 'June 2026',
      description: "Completed a practical front-end simulation focused on building a React web application using Skyscanner's Backpack design system, gaining experience in modern UI component development.",
      certificateLink: '/Front-End Software Engineering.pdf'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-12 gap-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 md:gap-4">
            <span className="w-8 md:w-12 h-1 bg-purple-500 rounded-full"></span>
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
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-purple-500 translate-x-[-3px]"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 leading-snug">{exp.role}</h3>
                  <h4 className="text-base md:text-lg text-slate-300">{exp.company}</h4>
                </div>
                <div className="flex flex-row md:flex-col items-center md:items-end flex-wrap gap-3 md:gap-2 shrink-0 mt-1 md:mt-0">
                  <span className="text-purple-400 font-medium text-sm md:text-base">{exp.period}</span>
                  {exp.certificateLink && (
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-white transition-all text-xs text-center whitespace-nowrap"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
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
