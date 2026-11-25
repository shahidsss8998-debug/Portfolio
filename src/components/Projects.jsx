import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'Practice Projects'];

  const projects = [
    {
      id: 1,
      title: 'HEM Clothing',
      category: 'Full Stack',
      shortDescription: 'A modern, responsive clothing website designed to showcase fashion collections with an elegant shopping experience and WhatsApp-based ordering.',
      fullDescription: 'HEM Clothing is a modern clothing storefront developed to showcase men\'s fashion collections through an attractive and user-friendly interface. The website features organized product displays, responsive layouts and smooth navigation, allowing customers to explore clothing products and connect directly through WhatsApp for orders and enquiries with an admin control via admin\'s portal.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      image: '/hem-clothing.png',
      liveLink: 'https://hem-clothing.netlify.app',
      githubLink: 'https://github.com/shahidsss8998-debug/',
      features: [
        'Modern and attractive clothing storefront.',
        'Responsive design for mobile, tablet and desktop.',
        'Organized product display.',
        'Easy product browsing and navigation.',
        'WhatsApp-based ordering and customer enquiries.',
      ],
      featured: true,
    },
    {
      id: 2,
      title: 'BreakTime',
      category: 'Full Stack',
      shortDescription: 'Full-stack Progressive Web App (PWA) for real-time cafe ordering, dynamic admin management, and delivery tracking.',
      fullDescription: 'BreakTime is an end-to-end full-stack Progressive Web Application designed for modern cafe ordering. It features dynamic admin menu and order management, real-time order status tracking, interactive delivery coordination, and automated multi-provider email notifications.',
      tags: ['React', 'Node.js', 'Firebase', 'PWA'],
      image: '/breaktime.png',
      liveLink: 'https://breaktime0.netlify.app',
      githubLink: 'https://github.com/shahidsss8998-debug/BreakTime.git',
      features: [
        'Progressive Web App (PWA) installation & offline capability',
        'Real-time customer ordering flow with Firebase synchronization',
        'Dynamic admin dashboard for menu management and live order dispatch',
        'Interactive delivery tracking with automated email notifications',
        'Responsive mobile-first user experience designed for quick cafe transactions',
      ],
      featured: true,
    },
    {
      id: 3,
      title: 'Spoonful Restaurant',
      category: 'Full Stack',
      shortDescription: 'Full-stack restaurant ordering platform with menu browsing, backend APIs, and email-based order management.',
      fullDescription: 'Designed and deployed a full-stack restaurant platform that allows customers to browse categorized culinary menus, customize food orders, and submit orders directly connected to a backend MongoDB database and automated email order routing.',
      tags: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      image: '/spoonful.png',
      liveLink: 'https://spoonful0.netlify.app',
      githubLink: 'https://github.com/shahidsss8998-debug/jsproject-frontend.git',
      features: [
        'Full-stack architecture with React frontend and Express.js REST APIs',
        'MongoDB database integration for storing and managing menu items',
        'Automated backend email order notifications and status processing',
        'Categorized culinary menus with dish descriptions and pricing',
        'Seamless checkout flow designed for desktop and mobile clients',
      ],
      featured: true,
    },
    {
      id: 4,
      title: 'Vehicle Rental Booking Website',
      category: 'Full Stack',
      shortDescription: 'Mobile-first vehicle rental booking platform with direct WhatsApp booking for tour travellers and cruisers.',
      fullDescription: 'A modern, mobile-first vehicle booking website built for Rainbow Holidays. Showcases an inventory of buses, travellers, and luxury cruisers with real-time specification previews and instant WhatsApp booking integration.',
      tags: ['React', 'Tailwind CSS', 'MongoDB'],
      image: '/Rainbow.png',
      liveLink: 'https://rainbowholidays.netlify.app/',
      githubLink: 'https://github.com/shahidsss8998-debug/Rainbow-Holidays.git',
      features: [
        'Direct WhatsApp-based booking action with pre-filled vehicle details',
        'Showcase of fleet vehicles (buses, travellers, luxury cruisers)',
        'Mobile-first responsive UI built with Tailwind CSS',
        'MongoDB data integration for dynamic fleet availability',
        'High-contrast visual design optimized for tourist booking workflows',
      ],
      featured: true,
    },
    {
      id: 5,
      title: 'Product Cart',
      category: 'Frontend',
      shortDescription: 'React-based shopping cart application with dynamic state management and real-time cart calculations.',
      fullDescription: 'A dynamic e-commerce shopping cart web application built with React and Tailwind CSS. Showcases modular state management, instant price calculations, item quantity controls, and responsive card layouts.',
      tags: ['React', 'Tailwind CSS'],
      image: '/cart.png',
      liveLink: 'https://productcart-01.netlify.app/',
      githubLink: 'https://github.com/shahidsss8998-debug/Cart-Project.git',
      features: [
        'Real-time shopping cart state management with React hooks',
        'Dynamic item quantity adjustments and instant subtotal calculation',
        'Modular e-commerce product grid with responsive Tailwind styling',
        'Intuitive empty-state and active-cart UI transitions',
      ],
      featured: false,
    },
    {
      id: 6,
      title: 'To-Do List',
      category: 'Frontend',
      shortDescription: 'Clean and intuitive task-management application with persistent daily task tracking.',
      fullDescription: 'A responsive task-management web application crafted to help users organize their daily goals with zero friction. Features instant task creation, completion toggles, deletion, and clean interactive feedback.',
      tags: ['React', 'Tailwind CSS'],
      image: '/to-dolist2.png',
      liveLink: 'https://shahidtodo2.netlify.app/',
      githubLink: 'https://github.com/shahidsss8998-debug/To-Do-List-2.git',
      features: [
        'Intuitive task addition, status toggling, and removal',
        'Clean, distraction-free UI with smooth Tailwind transitions',
        'Filterable task states for ongoing and completed tasks',
        'Fully responsive interface tested across multiple viewports',
      ],
      featured: false,
    },
    {
      id: 7,
      title: 'iBoot — Responsive Bootstrap Website',
      category: 'Practice Projects',
      shortDescription: 'Responsive business website built using Bootstrap with modern UI components and fluid grid layout.',
      fullDescription: 'A polished, responsive multi-section web layout built using the Bootstrap framework. Demonstrates fundamental layout structuring, modern UI components, responsive typography, and mobile-friendly grid patterns.',
      tags: ['HTML', 'Bootstrap'],
      image: '/iboot.png',
      liveLink: 'https://iboot.netlify.app/',
      githubLink: 'https://github.com/shahidsss8998-debug/Bootstrap.git',
      features: [
        'Fluid grid structure based on modern Bootstrap component system',
        'Fully responsive navigation bar with collapsing mobile menu',
        'Service feature blocks, testimonial layouts, and call-to-actions',
        'Cross-browser layout compatibility and CSS styling',
      ],
      featured: false,
    },
    {
      id: 8,
      title: 'Microsoft Website Clone',
      category: 'Practice Projects',
      shortDescription: 'Pixel-accurate Microsoft homepage clone demonstrating responsive layout precision and custom CSS styling.',
      fullDescription: 'A responsive Microsoft homepage replica created using vanilla HTML and CSS. Highlights rigorous layout structuring, styling precision, responsive navigation bars, and meticulous attention to corporate visual design.',
      tags: ['HTML', 'CSS'],
      image: '/firstprj.png',
      liveLink: 'https://madebyshahid.netlify.app/',
      githubLink: 'https://github.com/shahidsss8998-debug/CSS-projrct.git',
      features: [
        'Pixel-accurate replication of Microsoft corporate homepage hierarchy',
        'Custom CSS layout structuring without third-party frameworks',
        'Responsive media queries accommodating mobile, tablet, and desktop',
        'Precision positioning of promotional banners, products, and footer',
      ],
      featured: false,
    },
  ];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-20 relative overflow-hidden bg-[#070b1e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dev-card text-xs font-mono text-cyan-400 border border-white/10 mb-2 shadow-sm">
              <span>03</span>
              <span className="w-1 h-1 rounded-full bg-purple-400" />
              <span>SELECTED WORKS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight">
              Featured{' '}
              <span className="italic bg-linear-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Projects.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed font-sans">
            Seven deployed web applications verified from production records, including full-stack PWAs, restaurant ordering portals, and responsive UI systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8 pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${activeCategory === cat
                  ? 'bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-md shadow-purple-500/20'
                  : 'dev-card text-slate-400 hover:text-white border border-white/10'
                }`}
            >
              {cat}
              <span className="ml-1.5 text-[10px] opacity-70">
                ({cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Compact Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl dev-card-interactive border border-white/10 overflow-hidden flex flex-col justify-between transition-all hover:scale-[1.015]"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-[#090d24]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#070b1e] via-[#070b1e]/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Top Badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <span className="px-2 py-0.5 rounded-md dev-card text-[9px] font-mono font-semibold uppercase tracking-wider text-cyan-300 border border-white/10">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded-md bg-purple-600/90 text-[9px] font-mono font-bold text-white shadow-sm">
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Hover Quick View Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] cursor-pointer"
                  aria-label={`View details for ${project.title}`}
                >
                  <span className="px-3 py-1.5 rounded-lg bg-purple-600 text-white text-[11px] font-mono font-semibold shadow-md shadow-purple-500/30 flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Explore Details
                  </span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-sans font-bold text-white mb-1 line-clamp-1 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 mb-2.5 line-clamp-2 leading-relaxed font-sans">
                    {project.shortDescription}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-1.5 sm:py-2 rounded-lg font-mono font-medium text-xs text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-95 shadow-md shadow-purple-500/20 transition-all hover:scale-[1.02]"
                  >
                    <span>Live Demo</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-1.5 sm:py-2 rounded-lg font-mono text-xs text-slate-300 hover:text-white dev-card border border-white/10 hover:border-purple-500/40 transition-all hover:scale-[1.02]"
                  >
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ─── INTERACTIVE PROJECT DETAIL MODAL ────────────────────────────── */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl dev-card border border-white/15 bg-[#070b1e]/98 p-6 sm:p-8 shadow-2xl transition-all duration-300 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full dev-card flex items-center justify-center text-slate-400 hover:text-white transition-colors border border-white/10 z-20 cursor-pointer"
              aria-label="Close project modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image Preview */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-white/10 bg-[#090d24]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#070b1e] via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full dev-card text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 border border-white/10">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="mb-6">
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-sans font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {selectedProject.fullDescription}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/25"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Key Features */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Verified Project Features</h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                    <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Bar */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono font-bold text-sm text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-95 shadow-md shadow-purple-500/20 transition-all"
              >
                <span>Launch Live Application</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono font-medium text-sm text-slate-200 hover:text-white dev-card border border-white/15 hover:border-purple-500/40 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>View GitHub Repository</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
