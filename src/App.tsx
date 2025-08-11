import { useEffect, useState } from "react";
import {
  ChevronDown,
  Github,
  MessageCircle,
  Linkedin,
  Mail,
  Calendar,
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "education",
      "experience",
      "projects",
      "contact",
    ];
    const handleScroll = () => {
      const current = sections.find((section) => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const skillCategories = [
    {
      title: "Web Development",
      skills: ["PHP Laravel", "Nest.js", "Vue.js with Quasar", "React"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "SQLite"],
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "AI & Machine Learning",
      skills: ["Python", "Computer Vision", "Machine Learning", "FastAPI"],
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "GitLab", "Linux", "Docker"],
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Project Management",
      skills: ["ClickUp", "Discord", "Trello", "Postman"],
      color: "from-pink-400 to-purple-500",
    },
    {
      title: "ERP Systems",
      skills: ["Odoo Technical Consulting"],
      color: "from-indigo-400 to-cyan-500",
    },
  ];

  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "University Name",
      period: "2020 - 2022",
      location: "City, Country",
      description:
        "Specialized in Software Engineering and Artificial Intelligence",
      achievements: [
        "Graduated with Honors",
        "Research in Machine Learning",
        "Published Papers",
      ],
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "University Name",
      period: "2017 - 2020",
      location: "City, Country",
      description: "Foundation in Computer Science and Programming",
      achievements: [
        "Dean's List",
        "Programming Competition Winner",
        "Student Council Member",
      ],
    },
  ];

  const experiences = [
    {
      role: "Technical Consultant",
      company: "Odoo Implementation Company",
      period: "2022 - Present",
      location: "Algeria",
      description:
        "Specialized in Odoo ERP system implementation and customization for various clients.",
      achievements: [
        "Implemented Odoo for 10+ companies",
        "Customized modules for specific business needs",
        "Trained client teams on system usage",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Tech Startup",
      period: "2020 - 2022",
      location: "Algeria",
      description:
        "Developed web applications using Laravel, Vue.js, and various modern technologies.",
      achievements: [
        "Built scalable web applications",
        "Implemented AI-powered features",
        "Optimized database performance",
      ],
    },
    {
      role: "AI Developer Intern",
      company: "Research Lab",
      period: "2019 - 2020",
      location: "Remote",
      description:
        "Worked on computer vision and machine learning projects using Python.",
      achievements: [
        "Developed image recognition models",
        "Improved model accuracy by 15%",
        "Published research findings",
      ],
    },
  ];

  const projects = [
    {
      title: "AI-Powered Image Recognition System",
      description:
        "Computer vision application for automated object detection and classification using deep learning.",
      tech: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
      images: [
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      title: "ERP Management System",
      description:
        "Custom Odoo implementation with specialized modules for manufacturing and inventory management.",
      tech: ["Odoo", "Python", "PostgreSQL", "XML"],
      images: [
        "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      title: "E-Commerce Web Application",
      description:
        "Full-stack e-commerce platform with modern UI/UX and advanced features.",
      tech: ["Laravel", "Vue.js", "Quasar", "MySQL"],
      images: [
        "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      title: "Real-time Chat Application",
      description:
        "Modern chat application with real-time messaging and file sharing capabilities.",
      tech: ["Nest.js", "React", "Socket.io", "PostgreSQL"],
      images: [
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const nextImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages,
    }));
  };
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "about",
                "skills",
                "education",
                "experience",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-cyan-400 ${
                    activeSection === item ? "text-pink-400" : "text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 40, 200, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 0, 128, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(0, 255, 255, 0.3) 0%, transparent 50%)
            `,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-pulse">
            <span className="bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent bg-300% animate-gradient">
              SEIF EDDINE SEGUENI
            </span>
          </h1>
          <div className="text-2xl md:text-3xl mb-8 text-cyan-400 font-mono animate-fade-in">
            <span className="animate-typewriter">Full Stack Developer</span>
          </div>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer with expertise in web development,
            AI, and ERP systems. Specialized in creating innovative solutions
            using modern technologies.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Se1f0"
              target="_blank"
              className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-110 transition-transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/seif-eddine-segueni/"
              target="_blank"
              className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-110 transition-transform"
            >
              <Linkedin size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-cyan-400 hover:text-pink-400 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm Seif Eddine Segueni, a passionate full-stack developer with
                expertise in web development, artificial intelligence, and ERP
                systems. I specialize in creating innovative solutions that
                bridge technology and business needs.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With experience in Laravel, Vue.js, React, and Python, I've
                worked on diverse projects from AI-powered applications to
                complex ERP implementations. I'm passionate about leveraging
                technology to solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Laravel", "Vue.js", "React", "Python", "AI/ML", "Odoo"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-cyan-400/30 text-cyan-400 hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-600/50 to-pink-600/50 flex items-center justify-center">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Seif Eddine Segueni"
                      className="w-60 h-60 rounded-full object-cover border-4 border-cyan-400/30"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/10 to-purple-900/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="group">
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-cyan-400/20 hover:border-pink-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-3 animate-pulse`}
                        ></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-pink-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl text-pink-400 mb-2">
                        {edu.institution}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center text-cyan-400">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-purple-900/10 to-cyan-900/10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-8 border border-cyan-400/20 hover:border-pink-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl text-cyan-400 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center text-pink-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group perspective-1000">
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg overflow-hidden border border-cyan-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:rotateY-5 hover:scale-105">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.images[currentImageIndex[index] || 0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            prevImage(index, project.images.length)
                          }
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={() =>
                            nextImage(index, project.images.length)
                          }
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                        >
                          <ChevronRight size={16} />
                        </button>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          {project.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`w-2 h-2 rounded-full transition-all ${
                                imgIndex === (currentImageIndex[index] || 0)
                                  ? "bg-cyan-400"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded text-xs text-cyan-400 border border-cyan-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work
            together to create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <a
              href="mailto:sesegueni@gmail.com"
              className="group flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full transition-all transform hover:scale-105"
            >
              <Mail size={24} />
              <span className="text-lg font-semibold">Get In Touch</span>
            </a>
            <a
              href="https://wa.me/213790410947"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-full transition-all transform hover:scale-105"
            >
              <MessageCircle size={24} />
              <span className="text-lg font-semibold">WhatsApp</span>
            </a>
          </div>
          <div className="text-center space-y-2 text-gray-400">
            <p className="flex items-center justify-center space-x-2">
              <Mail size={16} />
              <span>sesegueni@gmail.com</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <Phone size={16} />
              <span>+213 790410947</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/30 bg-black/50">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2025 Seif Eddine Segueni. Crafted with ❤️ and lots of ☕</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
