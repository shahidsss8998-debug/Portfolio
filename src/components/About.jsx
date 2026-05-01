import React from 'react';

const About = () => {
  const techStack = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 md:w-full md:aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 p-2">
                <img
                  src="shahidimg.jpg"
                  alt="MUHAMMED SHAHID P"
                  className="w-full h-full object-cover rounded-xl transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="md:col-span-2">
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                I'm a passionate web developer focused on building modern and responsive web applications. I have hands-on experience with HTML, CSS, JavaScript, and React, along with styling using Tailwind CSS.
              </p>
              <p>
                I enjoy turning ideas into real-world projects and continuously improving my skills by building and experimenting with new technologies. My goal is to write clean, efficient code and create user-friendly interfaces.
              </p>
              <p>
                Currently, I'm working on personal projects to strengthen my frontend development skills and expand my knowledge in full-stack development.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-white">My Tech Stack</h3>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-purple-400 border border-slate-700 text-sm font-medium hover:border-purple-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
