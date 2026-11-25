import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/shahidsss8998-debug' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shahyid/' },
    { name: 'WhatsApp', url: 'https://wa.me/+917592037434' },
    { name: 'Instagram', url: 'https://www.instagram.com/sha.hyid/' },
  ];

  return (
    <footer className="py-14 sm:py-16 border-t border-white/10 bg-[#03050d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand Monogram & Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-[#070b1e] rounded-[6px] flex items-center justify-center font-serif italic text-white text-sm">
                SP
              </div>
            </div>
            <div>
              <p className="font-serif text-base font-bold text-white">
                MUHAMMED SHAHID P
              </p>
              <p className="text-xs text-slate-400 font-mono">
                Web & Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-7 text-xs font-mono text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-purple-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white hover:underline transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500 font-mono">
          <p>© {currentYear} Muhammed Shahid P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
