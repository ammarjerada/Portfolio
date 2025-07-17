import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Code,
  Database,
  Brain,
  Globe,
  ChevronDown,
  Menu,
  X,
  Download,
  ArrowRight,
  Star,
  Zap,
  Target,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';
import myPhoto from '/src/photoCV3.png'; // Adjust path as needed

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const skills = {
    languages: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' }
    ],
    frontend: [
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'ReactJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
    ],
    backend: [
      { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
      { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' }
    ],
    databases: [
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
    ],
    ai: [
      { name: 'OpenAI API', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
      { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' }
    ],
    dataScience: [
      { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' }
    ]
  };

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  const certifications = [
    {
      title: "Data Cleaning and Preprocessing with pandas",
      issuer: "365 Data Science",
      date: "November 2024",
      icon: "🐼",
      color: "blue",
      id: "CC-5473DDAAE5",
      skills: ["Pandas", "NumPy", "Python (Programming Language)"]
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco",
      date: "February 2024",
      icon: "📊",
      color: "purple",
      skills: ["Pandas", "NumPy", "Python (Programming Language)"]
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco",
      date: "July 2023",
      icon: "🔒",
      color: "emerald",
      skills: ["Cybersecurity", "Network Security", "Information Security"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Ammar Jerada
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.id
                      ? 'bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-400 border border-violet-500/30'
                      : 'text-slate-300 hover:text-violet-400 hover:bg-slate-800/50'
                      }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-violet-400 hover:bg-slate-800/50 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium w-full text-left transition-colors ${activeSection === item.id
                    ? 'bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-400'
                    : 'text-slate-300 hover:text-violet-400 hover:bg-slate-800/50'
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="relative w-96 h-96 mx-auto mb-12 mt-8">
              {/* Creative frame with multiple layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-full blur-2xl opacity-30 animate-pulse delay-300"></div>

              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-violet-500/40 shadow-2xl transform hover:scale-105 transition-all duration-500 bg-gradient-to-br from-violet-500/10 to-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent z-10"></div>
                <img
                  src={myPhoto}
                  alt="Ammar Jerada"
                  className="w-full h-full object-cover object-center"
                />

                {/* Floating elements around the image */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-bounce delay-100 shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce delay-300 shadow-lg"></div>
                <div className="absolute top-1/4 -left-8 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute bottom-1/4 -right-8 w-9 h-9 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse delay-500 shadow-lg"></div>
              </div>

              {/* Decorative rings */}
              <div className="absolute -inset-12 border-2 border-violet-500/20 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-16 border border-purple-500/15 rounded-full animate-spin-reverse"></div>
              <div className="absolute -inset-20 border border-cyan-500/10 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-8 mb-12">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="block text-slate-100">Ammar</span>
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Jerada
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-6 py-3 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-medium backdrop-blur-sm">
                <Brain className="inline w-4 h-4 mr-2" />
                Data Science Student
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                <Code className="inline w-4 h-4 mr-2" />
                Software Developer
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium backdrop-blur-sm">
                <Zap className="inline w-4 h-4 mr-2" />
                AI Enthusiast
              </span>
            </div>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Engineering Student in Data Science, Big Data & AI
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl font-semibold text-white hover:from-violet-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25"
            >
              <span className="flex items-center space-x-2">
                <Mail size={20} />
                <span>Get In Touch</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a href="/src/cvAmmarJERADA.pdf" download>
              <button className="px-8 py-4 border border-slate-600 rounded-xl font-semibold text-slate-300 hover:border-violet-500 hover:text-violet-400 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download CV</span>
                </span>
              </button>
            </a>

          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Mail, href: "mailto:ammarjerada2@gmail.com", color: "violet" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ammar-jerada-b9518a26b/", color: "blue" },
              { icon: Github, href: "https://github.com/ammarjerada", color: "purple" },
              { icon: Phone, href: "tel:0631173080", color: "emerald" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-${social.color}-500 hover:bg-${social.color}-500/10 transition-all duration-300 group backdrop-blur-sm`}
              >
                <social.icon size={24} className={`text-slate-400 group-hover:text-${social.color}-400 transition-colors`} />
              </a>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hover:text-violet-400 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-100">Passion for Technology Innovation</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Engineering student passionate about data science, big data, and artificial intelligence.
                  With a solid foundation in computer engineering and practical experience in development,
                  I strive to create innovative solutions that combine cutting-edge technology with real-world impact.
                </p>

              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-slate-100 mb-6 flex items-center">
                  <Globe className="w-6 h-6 text-violet-400 mr-3" />
                  Languages
                </h4>
                <div className="space-y-4">
                  {[
                    { lang: "Arabic", level: "Native", color: "emerald" },
                    { lang: "French", level: "Fluent", color: "violet" },
                    { lang: "English", level: "Fluent", color: "purple" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-slate-300">{item.lang}</span>
                      <span className={`text-${item.color}-400 font-medium`}>{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-slate-100 mb-6 flex items-center">
                  <Brain className="w-6 h-6 text-purple-400 mr-3" />
                  Interests
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["Artificial Intelligence", "Big Data", "Mobile Development", "Machine Learning", "Data Analysis"].map((interest, index) => (
                    <span key={index} className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-sm text-slate-300 hover:border-violet-500/50 hover:text-violet-400 transition-all duration-300">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-32">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500 rounded-full"></div>

            <div className="space-y-16">
              {[
                {
                  year: "2024 – Present",
                  title: "Engineering Degree in Data Science, Big Data & AI",
                  school: "ENSIASD, Taroudant",
                  color: "violet",
                  icon: Brain
                },
                {
                  year: "2022 – 2024",
                  title: "DUT in Computer Engineering",
                  school: "École Supérieure de Technologie, Safi",
                  color: "purple",
                  icon: Code
                },
                {
                  year: "2021 – 2022",
                  title: "Baccalaureate in Physical Chemistry Sciences",
                  school: "École Nibrasse El Ouloum, Berrechid",
                  color: "pink",
                  icon: Star
                }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-500 hover:transform hover:scale-105">
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/20 border border-${item.color}-500/30 text-${item.color}-300`}>
                        <Calendar size={16} className="mr-2" />
                        {item.year}
                      </div>
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`p-3 bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/20 rounded-xl`}>
                          <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-violet-400 transition-colors">{item.title}</h3>
                          <p className="text-slate-400">{item.school}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`absolute left-1/2 w-6 h-6 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-full transform -translate-x-1/2 border-4 border-slate-950 shadow-lg`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {[
              {
                period: "April 2024 – June 2024",
                company: "tidar.ma, Marrakesh",
                role: "Intern Developer",
                description: "Design and development of a mobile application for ticket scanning.",
                tools: ["React Native", "API Integration"],
                color: "emerald",
                icon: "📱"
              },
              {
                period: "July 2023 – August 2023",
                company: "Diamant Industrie, Casablanca",
                role: "Intern Developer",
                description: "Development of a desktop application for invoice management.",
                tools: ["Java", "MySQL"],
                color: "teal",
                icon: "💼"
              }
            ].map((exp, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{exp.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                      <p className="text-xl text-slate-300">{exp.company}</p>
                    </div>
                  </div>
                  <div className={`mt-4 lg:mt-0 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-${exp.color}-500/20 to-${exp.color}-600/20 border border-${exp.color}-500/30 text-${exp.color}-300 font-medium`}>
                    <Calendar size={18} className="mr-2" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed text-lg">{exp.description}</p>

                <div className="flex flex-wrap gap-3">
                  {exp.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="px-4 py-2 bg-slate-700/50 border border-slate-600 text-slate-300 rounded-lg text-sm font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Academic Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group p-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] relative">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl">
                    <Brain className="w-8 h-8 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-100 group-hover:text-orange-400 transition-colors">
                      AI Application for CV Analysis
                    </h3>
                    <p className="text-orange-300 font-medium mt-2">February 2025 – May 2025</p>
                  </div>
                </div>
                <a
                  href="https://github.com/ammarjerada/cvfit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700/50 rounded-xl hover:bg-orange-500/20 transition-all duration-300 group/link"
                >
                  <ExternalLink className="w-6 h-6 text-slate-400 group-hover/link:text-orange-400 transition-colors" />
                </a>
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                Development of an innovative web application, in collaboration with three other team members,
                to analyze CVs and generate personalized job offers using OpenAI API and
                advanced web scraping techniques. This project demonstrates the integration of artificial intelligence
                with modern web technologies to create practical solutions for recruitment and job matching.
              </p>

              <h4 className="text-xl font-semibold text-slate-100 mb-6">Technologies used:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {["Spring Boot", "ReactJS", "MySQL", "OpenAI API", "Jsoup", "OpenCV"].map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-slate-700/50 border border-slate-600 rounded-xl hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 group/tech">
                    <Code size={18} className="text-orange-400" />
                    <span className="text-sm font-medium text-slate-300 group-hover/tech:text-orange-300 transition-colors">{tech}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                {[
                  { icon: Brain, label: "Artificial Intelligence", color: "orange" },
                  { icon: Database, label: "Data Analysis", color: "red" },
                  { icon: Globe, label: "Web Application", color: "pink" }
                ].map((tag, index) => (
                  <div key={index} className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-${tag.color}-500/20 to-${tag.color}-600/20 border border-${tag.color}-500/30 rounded-full text-${tag.color}-300`}>
                    <tag.icon size={16} />
                    <span>{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Programming Languages",
                icon: <Code className="text-violet-400" size={28} />,
                skills: skills.languages,
                color: "violet"
              },
              {
                title: "Front-End Development",
                icon: <Globe className="text-blue-400" size={28} />,
                skills: skills.frontend,
                color: "blue"
              },
              {
                title: "Back-End Development",
                icon: <Database className="text-purple-400" size={28} />,
                skills: skills.backend,
                color: "purple"
              },
              {
                title: "Databases",
                icon: <Database className="text-emerald-400" size={28} />,
                skills: skills.databases,
                color: "emerald"
              },
              {
                title: "Artificial Intelligence",
                icon: <Brain className="text-pink-400" size={28} />,
                skills: skills.ai,
                color: "pink"
              },
              {
                title: "Data Science",
                icon: <Target className="text-cyan-400" size={28} />,
                skills: skills.dataScience,
                color: "cyan"
              }
            ].map((category, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-3 bg-gradient-to-r from-${category.color}-500/20 to-${category.color}-600/20 rounded-xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group/skill">
                      <div className="w-10 h-10 flex items-center justify-center bg-slate-600/50 rounded-lg group-hover/skill:bg-slate-600/70 transition-all duration-300">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="font-medium text-slate-300 flex-1">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-32">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r from-${cert.color}-500/20 to-${cert.color}-600/20 rounded-2xl`}>
                    <span className="text-3xl">{cert.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-yellow-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 mb-2">{cert.issuer}</p>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-${cert.color}-500/20 to-${cert.color}-600/20 border border-${cert.color}-500/30 text-${cert.color}-300 text-sm font-medium`}>
                      <Award size={14} className="mr-2" />
                      {cert.date}
                    </div>
                    {cert.id && (
                      <p className="text-xs text-slate-500 mt-2">ID: {cert.id}</p>
                    )}
                    {cert.skills && (
                      <div className="mt-4">
                        <p className="text-sm text-slate-400 mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Interested in my profile? Feel free to contact me to discuss collaboration opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "ammarjerada2@gmail.com",
                  href: "mailto:ammarjerada2@gmail.com",
                  color: "violet"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "0631173080",
                  href: "tel:0631173080",
                  color: "emerald"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Berrechid, Morocco",
                  href: "#",
                  color: "purple"
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group flex items-center space-x-6 p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r from-${contact.color}-500/20 to-${contact.color}-600/20 rounded-2xl flex items-center justify-center border border-${contact.color}-500/30`}>
                    <contact.icon className={`text-${contact.color}-400`} size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-100 text-lg mb-1 group-hover:text-violet-400 transition-colors">{contact.title}</h3>
                    <p className={`text-${contact.color}-400 font-medium`}>{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center">
                  <Globe className="w-6 h-6 text-violet-400 mr-3" />
                  Social Networks
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Linkedin, name: "LinkedIn - Ammar Jerada", href: "https://www.linkedin.com/in/ammar-jerada-b9518a26b/", color: "blue" },
                    { icon: Github, name: "GitHub - ammarjerada", href: "https://github.com/ammarjerada", color: "purple" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center space-x-4 p-4 hover:bg-slate-700/50 rounded-xl transition-all duration-300 group"
                    >
                      <social.icon className={`text-${social.color}-400 group-hover:scale-110 transition-transform`} size={24} />
                      <span className="text-slate-300 group-hover:text-violet-400 transition-colors">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-violet-400 mb-4">Ready to Collaborate</h3>
                <p className="text-slate-300 mb-6">
                  I'm always open to new opportunities and innovative projects.
                </p>
                <a
                  href="mailto:ammarjerada2@gmail.com?subject=Collaboration Opportunity"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-violet-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail size={20} />
                  <span>Send Message</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 py-12">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Ammar Jerada
            </h3>
            <p className="text-slate-400 mb-6">Data Science Engineer & Software Developer</p>
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: Mail, href: "mailto:ammarjerada2@gmail.com" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ammar-jerada-b9518a26b/" },
                { icon: Github, href: "https://github.com/ammarjerada" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-slate-400 hover:text-violet-400 transition-colors transform hover:scale-110"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              © 2025 Ammar Jerada. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;