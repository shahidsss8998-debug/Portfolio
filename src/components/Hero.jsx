import React from 'react';
import Hero3DScene from './Hero3DScene';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shahidsss8998-debug',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shahyid/',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/+917592037434',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.048c0 2.12.54 4.142 1.588 5.945L.057 24l6.105-1.602a11.834 11.834 0 005.885 1.554h.005c6.632 0 12.042-5.412 12.046-12.048a11.811 11.811 0 00-3.48-8.513" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sha.hyid/',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:shahidsss8998@gmail.com',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 dev-grid-subtle dev-ambient-glow overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Developer Headline & Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
            
            {/* Developer Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dev-card w-fit mb-6 shadow-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono text-slate-300 tracking-wide">
                Web Developer · Full-Stack Development
              </span>
            </div>

            {/* Prominent Name in Instrument Serif */}
            <div className="mb-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold block mb-1">
                Portfolio of
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl xl:text-8xl text-white leading-[0.98] tracking-tight">
                Muhammed <br />
                <span className="italic font-normal bg-linear-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  Shahid P.
                </span>
              </h1>
            </div>

            {/* Expressive Headline */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-slate-200 mb-6 leading-snug">
              Building Digital <span className="italic text-purple-400">Experiences</span> Beyond the Ordinary.
            </h2>

            {/* Accurate Professional Narrative */}
            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl leading-relaxed font-sans">
              I'm a passionate web developer focused on creating modern, responsive and user-friendly web experiences, with hands-on experience in frontend and full-stack development.
            </p>

            {/* Author Portrait Pill */}
            <div className="flex items-center gap-3.5 p-2 pr-4 rounded-2xl dev-card border border-white/10 w-fit mb-8 shadow-sm">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-purple-500/30 shrink-0">
                <img
                  src="/shahidimg.jpg"
                  alt="Muhammed Shahid P"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-serif font-bold text-white">Muhammed Shahid P</p>
                <p className="text-[10px] text-slate-400 font-mono">React · Full-Stack · Kerala, India</p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono font-medium text-xs text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-95 transition-all duration-300 shadow-md shadow-purple-500/20 hover:scale-[1.01]"
              >
                <span>Explore My Work</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono font-medium text-xs text-slate-200 dev-card border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-sm"
              >
                <span>Let's Connect</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-mono text-slate-500 mr-1 hidden sm:inline">Connect:</span>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl dev-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/40 transition-all"
                  aria-label={s.name}
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>

          </div>

          {/* Right Column: 3D Scene Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative">
              <Hero3DScene />

              {/* Developer Stat Card 1 */}
              <div className="hidden sm:flex absolute -top-1 right-2 items-center gap-3 p-3 rounded-2xl dev-card border border-white/10 shadow-xl">
                <span className="font-serif italic text-2xl text-purple-400 font-bold">
                  8+
                </span>
                <div>
                  <p className="text-xs font-semibold text-white leading-tight">Deployed Projects</p>
                  <p className="text-[10px] text-slate-400 font-mono">React · PWA · Full-Stack</p>
                </div>
              </div>

              {/* Developer Stat Card 2 */}
              <div className="hidden sm:flex absolute -bottom-1 left-2 items-center gap-3 p-3 rounded-2xl dev-card border border-white/10 shadow-xl">
                <span className="font-serif italic text-2xl text-cyan-400 font-bold">
                  5M
                </span>
                <div>
                  <p className="text-xs font-semibold text-white leading-tight">Internship Training</p>
                  <p className="text-[10px] text-slate-400 font-mono">Aspirasys, Chennai</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-1.5 text-slate-500 hover:text-purple-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
            <div className="w-4 h-7 rounded-full border border-slate-700 flex items-start justify-center p-1">
              <div className="w-1 h-1.5 rounded-full bg-purple-400 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
