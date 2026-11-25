import React, { useState } from 'react';

const Resume = () => {
  const [filter, setFilter] = useState('all');

  const milestones = [
    {
      id: 1,
      type: 'internship',
      company: 'Aspirasys, Chennai',
      role: '4-Month Internship in Web Development & Software Engineering',
      period: 'October 2025 – January 2026',
      badge: 'Software Engineering',
      description:
        'Successfully completed an intensive 4-month internship at Aspirasys, gaining in-depth practical experience in full-stack web development, building responsive user interfaces, integrating backend APIs, and deploying production web applications.',
      skills: ['Full-Stack Development', 'React.js', 'JavaScript (ES6+)', 'Backend API Integration', 'Production Deployment'],
      certificateLink: '/Certificate of 4 Month Internship.pdf',
    },
    {
      id: 2,
      type: 'internship',
      company: 'Aspirasys, Chennai',
      role: '1-Month Internship in Web Development, AI Tools & Deployment',
      period: 'September 2025 – October 2025',
      badge: 'Web & AI Tools',
      description:
        'Successfully completed a 1-month internship at Aspirasys, gaining hands-on experience in web development, AI tools, and deployment platforms while building real-world projects including a personal portfolio website.',
      skills: ['Web Development', 'AI Developer Tools', 'Deployment Platforms', 'Modern UI Structuring'],
      certificateLink: '/Certificate of 1 Month Internship.pdf',
    },
    {
      id: 3,
      type: 'simulation',
      company: 'Forage',
      role: 'Software Engineering Job Simulation',
      period: 'June 2026',
      badge: 'Industry Simulation',
      description:
        'Completed a hands-on simulation covering full-stack development tasks including modifying a .NET backend, working with a React/Redux frontend, handling client requests, writing unit tests, and creating a pull request — simulating real-world software engineering workflows.',
      skills: ['Full-Stack Simulation', 'React & Redux', 'Unit Testing', 'Pull Request Workflows', 'Client Requests'],
      certificateLink: '/Forage_SoftwareEngineering Job Simulation_Certificate.pdf',
    },
    {
      id: 4,
      type: 'simulation',
      company: 'Skyscanner',
      role: 'Front-End Software Engineering',
      period: 'June 2026',
      badge: 'Front-End Simulation',
      description:
        "Completed a practical front-end simulation focused on building a React web application using Skyscanner's Backpack design system, gaining experience in modern UI component development.",
      skills: ['Backpack Design System', 'Component Architecture', 'React UI Development', 'Accessible Interfaces'],
      certificateLink: '/Front-End Software Engineering.pdf',
    },
    {
      id: 5,
      type: 'certification',
      company: 'Professional Certification',
      role: 'Microsoft Word Certification',
      period: 'Self-Paced',
      badge: 'Productivity & Documentation',
      description:
        'Successfully completed a comprehensive certification in Microsoft Word, demonstrating proficiency in advanced document formatting, styling, and data organization. Gained practical skills in creating professional documents, reports, and templates.',
      skills: ['Document Formatting', 'Data Organization', 'Technical Reports', 'Document Styling'],
      certificateLink: '/MsWord_Certificate.pdf',
    },
  ];

  const filteredMilestones =
    filter === 'all'
      ? milestones
      : milestones.filter((m) => m.type === filter);

  return (
    <section id="experience" className="py-16 sm:py-20 relative bg-[#050814] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dev-card text-xs font-mono text-cyan-400 border border-white/10 mb-2 shadow-sm">
              <span>04</span>
              <span className="w-1 h-1 rounded-full bg-purple-400" />
              <span>EXPERIENCE & MILESTONES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight">
              Work Experience &{' '}
              <span className="italic bg-linear-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Certifications.</span>
            </h2>
          </div>

          {/* Download CV CTA */}
          <a
            href="/My_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-mono font-bold text-xs text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-95 shadow-md shadow-purple-500/20 transition-all hover:scale-105 w-fit"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8 pb-1">
          {[
            { id: 'all', label: 'All Records' },
            { id: 'internship', label: 'Internships' },
            { id: 'simulation', label: 'Job Simulations' },
            { id: 'certification', label: 'Certifications' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? 'bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-md shadow-purple-500/20'
                  : 'dev-card text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Journey Timeline */}
        <div className="space-y-4 sm:space-y-5 relative before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-linear-to-b before:from-purple-500 before:via-cyan-500 before:to-transparent">
          {filteredMilestones.map((m) => (
            <div
              key={m.id}
              className="relative pl-8 sm:pl-12 group transition-all duration-300"
            >
              {/* Timeline Node */}
              <div className="absolute left-1.5 sm:left-3.5 top-4 w-3 h-3 rounded-full bg-purple-500 border-2 border-[#050814] group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />

              {/* Milestone Card */}
              <div className="p-3.5 sm:p-5 rounded-xl dev-card-interactive border border-white/10 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-2.5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                        {m.badge}
                      </span>
                      <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                        {m.period}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-sans font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                      {m.role}
                    </h3>
                    <h4 className="text-xs sm:text-sm text-cyan-300/90 font-medium">
                      {m.company}
                    </h4>
                  </div>

                  {/* View Certificate Action (Direct link in new tab - previous system) */}
                  {m.certificateLink && (
                    <a
                      href={m.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono font-semibold text-slate-200 hover:text-white dev-card border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/15 transition-all self-start shrink-0 cursor-pointer shadow-sm"
                    >
                      <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>View Certificate</span>
                    </a>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-2.5 font-sans">
                  {m.description}
                </p>

                {/* Skills Learned */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                  {m.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-white/5 border border-white/5"
                    >
                      {skill}
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

export default Resume;
