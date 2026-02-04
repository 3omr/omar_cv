import React, { useState, useEffect } from 'react';
import {
  Code,
  Stethoscope,
  Smartphone,
  ExternalLink,
  Github,
  Mail,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Award,
  Facebook,
  Linkedin,
  Twitter,
  MessageCircle
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight flex items-center gap-2">
            <span className="text-cyan-400">&lt;</span>
            OmarAA
            <span className="text-cyan-400">/&gt;</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-800 border-b border-slate-700 p-4 flex flex-col gap-4 shadow-xl">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-slate-300 hover:text-cyan-400 py-2 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-4xl mx-auto px-6 text-center z-10">

          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 rounded-full"></div>
            <img
              src="https://i.ibb.co/zHLX8KS1/photo-2025-09-29-16-51-17.jpg"
              alt="Omar Abdel-Aleem"
              className="relative w-32 h-32 md:w-44 md:h-44 object-cover object-top rounded-full border-4 border-slate-800 shadow-2xl mx-auto ring-2 ring-cyan-500/30"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Omar <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Abdel-Aleem</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Revolutionizing medical education through technology. Creating intuitive tools like <span className="text-cyan-400 font-medium">DocReader</span> to empower students and streamline learning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all shadow-lg shadow-cyan-500/25 w-full sm:w-auto"
            >
              Explore My Apps
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold transition-all w-full sm:w-auto"
            >
              Contact Me
            </button>
          </div>

          <div className="flex justify-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <Code size={20} className="text-cyan-400" />
              <span>EdTech Developer</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-slate-800"></div>
            <div className="flex items-center gap-2">
              <Stethoscope size={20} className="text-pink-400" />
              <span>Medical Content Creator</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-800">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="text-cyan-400" />
                  Education Journey
                </h3>
                <div className="space-y-8">

                  {/* Medicine */}
                  <div className="relative border-l-2 border-cyan-500/30 pl-6 pb-2">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900"></span>
                    <h4 className="text-lg font-bold text-white leading-none">Faculty of Medicine</h4>
                    <p className="text-slate-400 text-sm mt-1">Al-Azhar University, Damietta</p>
                    <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider mt-2 mb-3">Oct 2023 - Present</p>

                    <div className="space-y-2 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Award size={14} className="text-yellow-500 shrink-0" />
                        <span>Currently in <span className="text-white font-medium">3rd Year</span></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Award size={14} className="text-yellow-500 shrink-0" />
                        <span>Ranked <span className="text-white font-medium">9th</span> in 2nd Year</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Award size={14} className="text-yellow-500 shrink-0" />
                        <span>Ranked <span className="text-white font-medium">15th</span> in 1st Year</span>
                      </div>
                    </div>
                  </div>

                  {/* Dentistry */}
                  <div className="relative border-l-2 border-slate-700 pl-6 pb-2">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-900"></span>
                    <h4 className="text-lg font-semibold text-slate-200 leading-none">Faculty of Dentistry</h4>
                    <p className="text-slate-500 text-sm mt-1">Al-Azhar University, Assiut</p>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">Oct 2022 - 2023</p>
                  </div>

                  {/* High School */}
                  <div className="relative border-l-2 border-slate-700 pl-6">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600 border-4 border-slate-900"></span>
                    <h4 className="text-lg font-semibold text-slate-200 leading-none">Al-Azhar High School</h4>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">Graduated July 2022</p>
                  </div>

                </div>
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Medical Content <span className="text-cyan-400">&</span> Tech Innovator
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                I combine my top-tier academic performance in medicine with advanced software development skills to build educational platforms. My goal is to make complex medical knowledge accessible and easy to digest for students.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Through projects like <strong>DocReader Guide</strong> and <strong>Nerdio</strong>, I provide students with optimized learning environments, helping them achieve their academic goals faster and more efficiently.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-1">Top 10</h4>
                  <p className="text-sm text-slate-500">Academic Ranking</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-white mb-1">Flutter</h4>
                  <p className="text-sm text-slate-500">EdTech Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-cyan-400">Stack</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The technology behind my educational platforms.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Flutter', icon: <Smartphone size={24} />, color: 'text-blue-400' },
              { name: 'Dart', icon: <Code size={24} />, color: 'text-cyan-400' },
              { name: 'Firebase', icon: <Award size={24} />, color: 'text-yellow-500' },
              { name: 'State Mgmt', icon: <Code size={24} />, color: 'text-green-400' },
              { name: 'REST APIs', icon: <ExternalLink size={24} />, color: 'text-purple-400' },
              { name: 'Git', icon: <Github size={24} />, color: 'text-orange-400' },
              { name: 'UI/UX', icon: <BookOpen size={24} />, color: 'text-pink-400' },
              { name: 'Problem Solving', icon: <Code size={24} />, color: 'text-white' },
            ].map((skill, index) => (
              <div key={index} className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 p-6 rounded-xl flex flex-col items-center gap-3 transition-all hover:-translate-y-1">
                <div className={`${skill.color}`}>{skill.icon}</div>
                <span className="font-medium text-slate-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational <span className="text-cyan-400">Platforms</span></h2>
              <p className="text-slate-400">Apps designed to enhance learning and productivity.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
                <BookOpen size={64} className="text-blue-500/20 absolute -right-4 -bottom-4" />
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 backdrop-blur-sm relative z-10">
                  <span className="text-2xl font-bold text-white">DocReader Guide</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full">FLUTTER</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full">MEDICINE</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">DocReader Guide</h3>
                <p className="text-slate-400 mb-6">
                  A free educational platform for medical students that centralizes lectures and questions in a distraction-free environment. I developed this cross-platform solution (Android & iOS) to significantly speed up information retention.
                </p>
                <div className="flex items-center gap-4">
                  <a href="https://doc-reader-guide.com/android-app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors">
                    <ExternalLink size={18} /> Download App
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="h-48 bg-gradient-to-br from-cyan-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
                <Smartphone size={64} className="text-cyan-500/20 absolute -right-4 -bottom-4" />
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 backdrop-blur-sm relative z-10">
                  <span className="text-2xl font-bold text-white">Nerdio</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full">FLUTTER</span>
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full">BUSINESS</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Nerdio</h3>
                <p className="text-slate-400 mb-6">
                  My educational business platform designed for instructors to securely host content and easily reach students. I developed the complete mobile experience for both Android and iOS to facilitate seamless knowledge sharing.
                </p>
                <div className="flex items-center gap-4">
                  <a href="https://nerdio.app/download" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors">
                    <ExternalLink size={18} /> Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Let's <span className="text-cyan-400">Connect</span></h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Whether you are a student using my apps or interested in my medical content, feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap">
            <a href="https://wa.me/201024086054" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-colors w-full sm:w-auto justify-center">
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a href="mailto:oabelealeem3@gmail.com" className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors w-full sm:w-auto justify-center">
              <Mail size={20} />
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Omar Abdel-Aleem. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <a href="https://www.linkedin.com/in/omar-abdel-aleem-77a072202/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Linkedin size={18} /> <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href="https://github.com/3omr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Github size={18} /> <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href="https://x.com/3omr3b3leem" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Twitter size={18} /> <span className="hidden sm:inline">Twitter</span>
            </a>
            <a href="https://www.facebook.com/omar.abdelaleem.144/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Facebook size={18} /> <span className="hidden sm:inline">Facebook</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
