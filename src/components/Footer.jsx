import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <div className="flex justify-center gap-6 mb-8">
          {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-slate-500 hover:text-purple-400 transition-colors text-sm font-medium"
            >
              {social}
            </a>
          ))}
        </div> */}
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Muhammed Shahid P. All rights reserved.
        </p>
        <p className="text-slate-600 text-[10px] mt-2 uppercase tracking-widest">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
