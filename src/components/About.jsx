import React from 'react';

const About = () => {
  const highlights = [
    {
      label: 'Internship Training',
      value: '5 Months',
      sub: 'Aspirasys, Chennai',
    },
    {
      label: 'Verified Projects',
      value: '8+',
      sub: 'Frontend & Full-Stack',
    },
    {
      label: 'Core Disciplines',
      value: 'React & Full-Stack',
      sub: 'Tailwind, Node, Python',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative bg-[#070b1e]/60 border-t border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dev-card text-xs font-mono text-cyan-400 border border-white/10 mb-2 shadow-sm">
            <span>01</span>
            <span className="w-1 h-1 rounded-full bg-purple-400" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white leading-tight max-w-3xl">
            Curiosity Guided by Craft,{' '}
            <span className="italic bg-linear-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Grounded</span> in Practical Engineering.
          </h2>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Portrait with compact dark framing (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4 items-center lg:items-start">
            <div className="relative group max-w-65 sm:max-w-70 w-full mx-auto lg:mx-0">
              {/* Clean border frame */}
              <div className="rounded-2xl overflow-hidden dev-card border border-white/10 p-2 shadow-xl">
                <div className="relative aspect-4/4.5 w-full rounded-xl overflow-hidden bg-[#090d24]">
                  <img
                    src="/shahidimg.jpg"
                    alt="Muhammed Shahid P"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#050814]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Clean identity caption at base */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-lg dev-card border border-white/15 flex items-center justify-between">
                    <div>
                      <p className="font-sans text-xs font-bold text-white">Muhammed Shahid P</p>
                      <p className="text-[10px] text-slate-400 font-mono">Web Developer</p>
                    </div>
                    <span className="text-[9px] font-mono text-purple-300 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                      Kerala, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 w-full max-w-65 sm:max-w-70">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl dev-card border border-white/10 flex flex-col justify-between shadow-sm text-center"
                >
                  <span className="font-serif italic text-base sm:text-lg text-purple-400 block font-bold">
                    {h.value}
                  </span>
                  <div>
                    <span className="text-[10px] font-medium text-white block line-clamp-1">
                      {h.label}
                    </span>
                    <span className="text-[8px] font-mono text-slate-400 block line-clamp-1">
                      {h.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative & Principles (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              <p className="text-lg sm:text-xl font-serif text-white leading-snug">
                I'm <strong className="text-purple-300 font-semibold">Muhammed Shahid P</strong>, a web developer interested in creating modern and full-stack web applications.
              </p>
              
              <p>
                I have hands-on experience with <span className="text-white font-semibold">HTML, CSS, JavaScript, React and Tailwind CSS</span>, and have expanded my knowledge through full-stack development projects including backend RESTful API architecture, database operations, and continuous deployment workflows.
              </p>

              {/* Verified Editorial Quote Box */}
              <div className="p-5 sm:p-6 rounded-2xl dev-card border-l-4 border-l-purple-500 border-white/10 my-4 shadow-sm">
                <p className="text-xs sm:text-sm text-slate-200 italic font-serif leading-relaxed">
                  "Completed a one-month internship at Aspirasys focused on web development, AI tools and deployment, followed by a four-month internship focused on full-stack development and software engineering."
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs font-mono text-purple-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Internship Experience Verified at Aspirasys, Chennai</span>
                </div>
              </div>

              <p>
                I continue to develop practical projects to improve my development skills and learn modern technologies. My focus is on writing clean, efficient code, creating intuitive interfaces, and building resilient web applications that provide real utility.
              </p>
            </div>

            {/* Feature Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="p-4 rounded-xl dev-card border border-white/10 shadow-sm">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  Design Architecture
                </span>
                <h4 className="font-sans text-base font-bold text-white mb-1">Responsive Interfaces</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Precision layout structuring with modern CSS principles and fluid mobile typography.
                </p>
              </div>

              <div className="p-4 rounded-xl dev-card border border-white/10 shadow-sm">
                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                  Engineering Stack
                </span>
                <h4 className="font-sans text-base font-bold text-white mb-1">Full-Stack Capability</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  RESTful services in Node.js & Python integrated with MongoDB, Firebase, and cloud hosting.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mt-8">
              <a
                href="/My_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-95 transition-all shadow-md shadow-purple-500/20"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>View Complete Resume</span>
              </a>
              <a
                href="#skills"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-200 dev-card border border-white/10 hover:border-purple-500/40 transition-colors"
              >
                <span>Explore Technical Skills</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
