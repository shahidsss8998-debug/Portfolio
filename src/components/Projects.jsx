import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Spoonful Restaurant',
      description: 'Designed and deployed a full-stack restaurant ordering platform with email-based order management and backend APIs using JavaScript and Express.js.',
      tags: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      image: 'spoonful.png',
      liveLink: 'https://spoonful0.netlify.app',
      githubLink: 'https://github.com/shahidsss8998-debug/jsproject-frontend.git',
    },
    {
      title: 'Product Cart',
      description: 'A React-based shopping cart with dynamic product and cart updates.',
      tags: ['React', "tailwindcss"],
      image: 'cart.png',
      liveLink: 'https://productcart-01.netlify.app/',
      githubLink: 'https://github.com/shahidsss8998-debug/Cart-Project.git',
    },
    {
      title: 'To-Do List',
      description: 'A responsive to-do list application that helps users manage daily tasks with a clean and intuitive interface.',
      tags: ['React', 'tailwindcss'],
      image: 'to-dolist2.png',
      liveLink: 'https://shahidtodo2.netlify.app/',
      githubLink: 'https://github.com/shahidsss8998-debug/To-Do-List-2.git',
    },
    {
      title: 'Vehicle Rental Booking Website',
      description: 'Designed and developed a modern, mobile-first vehicle rental website with WhatsApp-based booking, showcasing buses, travellers, and cruisers with a clean, premium UI.',
      tags: ['React', 'tailwindcss', 'MongoDB'],
      image: 'Rainbow.png',
      liveLink: 'https://rainbowholidays.netlify.app/',
      githubLink: 'https://github.com/shahidsss8998-debug/Rainbow-Holidays.git',
    },
    {
      title: 'iBoot – Responsive Bootstrap Website',
      description: 'A responsive website built using Bootstrap, featuring a clean layout, modern UI components, and mobile-friendly design for a seamless user experience.',
      tags: ['HTML', 'Bootstrap'],
      image: 'iboot.png',
      liveLink: 'https://iboot.netlify.app/',
      githubLink: 'https://github.com/shahidsss8998-debug/Bootstrap.git',
    },
    {
      title: 'Microsoft Website Clone',
      description: 'A responsive Microsoft homepage clone created using HTML and CSS, demonstrating strong layout structuring, styling precision, and attention to UI detail.',
      tags: ['HTML', 'CSS'],
      image: 'firstprj.png',
      liveLink: 'https://madebyshahid.netlify.app/',
      githubLink: 'https://github.com/shahidsss8998-debug/CSS-projrct.git',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
          Projects
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all hover:scale-[1.02] shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">{project.title}</h3>
                <p className="text-slate-400 text-[10px] mb-2 line-clamp-2 leading-tight">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] uppercase tracking-wider font-bold text-purple-400 bg-purple-500/10 px-1 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href={project.liveLink}
                    className="w-full text-center py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-[10px] font-semibold rounded-md transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="w-full text-center py-1.5 border border-slate-700 hover:border-slate-500 text-slate-300 text-[10px] font-semibold rounded-md transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
