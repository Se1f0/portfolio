import { useEffect, useState } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Calendar,
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { FaXTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa6";
import profilePic from "./assets/avatar/me.jpg";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// TR Verify project images
import trVerify1 from "./assets/projects/tr_verify/1.png";
import trVerify2 from "./assets/projects/tr_verify/2.png";
import trVerify3 from "./assets/projects/tr_verify/3.png";
import trVerify4 from "./assets/projects/tr_verify/4.png";
import trVerify5 from "./assets/projects/tr_verify/5.png";
import trVerify6 from "./assets/projects/tr_verify/6.png";
import trVerify7 from "./assets/projects/tr_verify/7.png";
import trVerify8 from "./assets/projects/tr_verify/8.png";

// WMS project images
import wms1 from "./assets/projects/wms/1.png";
import wms2 from "./assets/projects/wms/2.png";
import wms3 from "./assets/projects/wms/3.png";
import wms4 from "./assets/projects/wms/4.png";
import wms5 from "./assets/projects/wms/5.png";

// Althue project images
import althue1 from "./assets/projects/althue/1.png";
import althue2 from "./assets/projects/althue/2.png";
import althue3 from "./assets/projects/althue/3.png";
import althue4 from "./assets/projects/althue/4.png";
import althue5 from "./assets/projects/althue/5.png";

// Click2Secure project images
import c2s1 from "./assets/projects/c2s/1.png";
import c2s2 from "./assets/projects/c2s/2.png";
import c2s3 from "./assets/projects/c2s/3.png";
import c2s4 from "./assets/projects/c2s/4.png";
import c2s5 from "./assets/projects/c2s/5.png";

// Zad X project images
import zx1 from "./assets/projects/zx/1.png";
import zx2 from "./assets/projects/zx/2.png";
import zx3 from "./assets/projects/zx/3.png";
import zx4 from "./assets/projects/zx/4.png";
import zx5 from "./assets/projects/zx/5.png";

// Lung Cancer Detector project images
import pfe1 from "./assets/projects/pfe/1.png";
import pfe2 from "./assets/projects/pfe/2.png";
import pfe3 from "./assets/projects/pfe/3.png";
import pfe4 from "./assets/projects/pfe/4.png";
import pfe5 from "./assets/projects/pfe/5.png";
import pfe6 from "./assets/projects/pfe/6.png";
import pfe7 from "./assets/projects/pfe/7.png";
import pfe8 from "./assets/projects/pfe/8.png";
import pfe9 from "./assets/projects/pfe/9.png";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [currentModalProject, setCurrentModalProject] = useState<number | null>(null);
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState<number>(0);

  // Calculate age based on birth date
  const calculateAge = () => {
    const birthDate = new Date('1999-12-04');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };
  
  const age = calculateAge();

  const openModal = (projectIndex: number, imageIndex: number) => {
    setCurrentModalProject(projectIndex);
    setCurrentModalImageIndex(imageIndex);
    setModalImage(projects[projectIndex].images[imageIndex]);
  };

  const closeModal = () => {
    setModalImage(null);
    setCurrentModalProject(null);
    setCurrentModalImageIndex(0);
  };

  const nextModalImage = () => {
    if (currentModalProject === null) return;
    
    const projectImages = projects[currentModalProject].images;
    const nextIndex = (currentModalImageIndex + 1) % projectImages.length;
    setCurrentModalImageIndex(nextIndex);
    setModalImage(projectImages[nextIndex]);
  };

  const prevModalImage = () => {
    if (currentModalProject === null) return;
    
    const projectImages = projects[currentModalProject].images;
    const prevIndex = (currentModalImageIndex - 1 + projectImages.length) % projectImages.length;
    setCurrentModalImageIndex(prevIndex);
    setModalImage(projectImages[prevIndex]);
  };

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
      skills: [
        "PHP (Laravel)",
        "Javascript/Typescript",
        "Nest.js",
        "Vue.js (Quasar)",
        "React",
        "FastApi",
      ],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "SQLite"],
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "AI & Machine Learning",
      skills: ["Python", "Computer Vision", "Machine Learning"],
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "DevOps",
      skills: ["Git", "GitHub", "GitLab", "Linux", "Docker"],
      color: "from-orange-400 to-red-500",
    },
    {
      title: "ERP Systems",
      skills: ["Odoo"],
      color: "from-indigo-400 to-cyan-500",
    },
  ];

  const education = [
    {
      degree: "Master's in Computer Vision",
      institution:
        "The University of Science and Technology – Houari Boumediene",
      period: "2020 - 2022",
      location: "Algiers, Algeria",
      description: "Specialized in Computer Vision and Artificial Intelligence",
      achievements: [
        /*"Graduated with Honors",
        "Research in Machine Learning",
        "Published Papers",*/
      ],
    },
    {
      degree: "Bachelor's in Computer Science",
      institution:
        "The University of Science and Technology – Houari Boumediene",
      period: "2017 - 2020",
      location: "Algiers, Algeria",
      description: "Foundation in Computer Science and Programming",
      achievements: [
        /*"Dean's List",
        "Programming Competition Winner",
        "Student Council Member",*/
      ],
    },
  ];

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Trybe Agency",
      period: "2024 - Present",
      location: "Algeria",
      description:
        "Developed web applications using Laravel, Vue.js, and various modern technologies.",
      achievements: [
        /*"Built scalable web applications",
        "Implemented AI-powered features",
        "Optimized database performance",*/
      ],
    },
    {
      role: "Technical Consultant",
      company: "Weasydoo",
      period: "2023 - 2024",
      location: "Algeria",
      description:
        "Specialized in Odoo ERP system implementation and customization for various clients.",
      achievements: [
        /*"Implemented Odoo for 10+ companies",
        "Customized modules for specific business needs",
        "Trained client teams on system usage",*/
      ],
    },
  ];

  const projects = [
    {
      title: "TR Verify",
      description:
        "A comprehensive OTP service platform allowing users to create projects, generate tokens, and manage authentication. Features include a KPI dashboard, billing system with subscription management, credit tracking, and automated invoicing. The service integrates with Icsonet for local numbers and Twilio for international SMS delivery.",
      tech: ["Laravel", "Filament", "MySQL"],
      images: [trVerify1, trVerify2, trVerify3, trVerify4, trVerify5, trVerify6, trVerify7, trVerify8],
      liveUrl: "https://tr-verify.thetrybe.xyz/",
      githubUrl: "",
    },
    {
      title: "Warehouse Management System (WMS)",
      description:
        "A comprehensive warehouse management solution that covers the complete workflow from reception to orders and production. The system enables detailed tracking of all operations with robust roles and permissions management. Includes a specialized PDA version designed for operators to use on portable devices in the warehouse environment.",
      tech: ["Laravel", "Vue.js", "MySQL", "REST API"],
      images: [wms1, wms2, wms3, wms4, wms5],
      liveUrl: "https://fg-wms.netlify.app/",
      githubUrl: "",
    },
    {
      title: "Althue Learning Platform",
      description:
        "A full-featured learning platform with API backend built in Laravel. The system allows administrators to create courses, manage users (teachers and students), assign courses, and track payments. Features include a comprehensive support system, user progression tracking, and an analytics dashboard displaying overall statistics. Includes both a public landing page to showcase courses and a secure management dashboard.",
      tech: ["Laravel", "REST API", "MySQL"],
      images: [althue1, althue2, althue3, althue4, althue5],
      liveUrl: "https://althue-academy.com/",
      githubUrl: "",
    },
    {
      title: "Zad X (ZX) CRM Platform",
      description:
          "An AI-powered CRM platform backend built with NestJS. The system enables sellers to track their clients, manage orders, create products, and monitor client campaigns. The RESTful API backend provides robust data management capabilities with PostgreSQL for efficient data storage and retrieval.",
      tech: ["NestJS", "PostgreSQL", "REST API", "TypeScript"],
      images: [zx1, zx2, zx3, zx4, zx5],
      liveUrl: "https://zx.bm-tech.xyz/fr",
      githubUrl: "",
    },
    {
      title: "Click2Secure (C2S)",
      description:
        "An insurance management platform for health insurance in the UAE. The system enables insurance companies to manage their products, quotes, policies, and track data through comprehensive reports. Integrates with various Third-Party Administrator (TPA) APIs to provide users with general insights for better management and decision-making. Features an AI-powered OCR component built with Python FastAPI that extracts data from uploaded documents, streamlining the information processing workflow.",
      tech: ["Laravel", "Filament", "MySQL", "Python", "FastAPI"],
      images: [c2s1, c2s2, c2s3, c2s4, c2s5],
      liveUrl: "https://c2sme.com/login",
      githubUrl: "",
    },
    {
      title: "Lung Cancer Detector",
      description:
        "A deep learning application developed as a Master's degree graduation project. This desktop application allows users to import lung CT scans, which are then processed and analyzed to detect potential nodules and assess their likelihood of being cancerous. The system combines deep learning techniques with game theory for accurate detection and classification, providing a valuable diagnostic aid tool for medical professionals.",
      tech: ["Python", "PyQt", "PyTorch", "OpenCV", "NumPy", "Deep Learning"],
      images: [pfe1, pfe2, pfe3, pfe4, pfe5, pfe6, pfe7, pfe8, pfe9],
      liveUrl: "",
      githubUrl: "https://github.com/Se1f0/GUI-PFE-MASTER",
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

  const handleNextImage = (index: number) => {
    nextImage(index, projects[index].images.length);
  };

  const handlePrevImage = (index: number) => {
    prevImage(index, projects[index].images.length);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Analytics />
      <SpeedInsights />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
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
            <span className="bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent bg-300 animate-gradient">
              Seif Eddine Segueni
            </span>
          </h1>
          <div className="text-2xl md:text-3xl mb-8 text-cyan-400 font-mono animate-fade-in">
            <span className="animate-typewriter">Full Stack Developer</span>
          </div>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer with expertise in web development.
            Specialized in creating innovative solutions using modern
            technologies.
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
            <a
              href="https://x.com/Se1f01"
              target="_blank"
              className="p-3 rounded-full bg-gradient-to-r from-purple-900 to-indigo-800 hover:from-purple-800 hover:to-indigo-700 hover:scale-110 transition-all"
            >
              <FaXTwitter size={24} className="text-white" />
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
                I'm Seif Eddine Segueni, {age} years old passionate full-stack developer with
                expertise in web development and software engineering. I specialize in creating innovative solutions that
                bridge technology and business needs.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With experience in Laravel, Vue.js and Python, I've
                worked on diverse projects covering different real life fields and needs. I'm passionate about leveraging
                technology to solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Laravel", "Vue.js", "Nest.js", "Python"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-cyan-400/30 text-cyan-400 hover:scale-105 transition-transform"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-600/50 to-pink-600/50 flex items-center justify-center">
                    <img
                      src={profilePic}
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
          <div className="flex flex-wrap justify-center gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(20%-1.6rem)]">
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-cyan-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:rotateY-5 hover:scale-105 h-full flex flex-col">
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
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg overflow-hidden border border-cyan-400/20 hover:border-pink-400/40 transition-all duration-300 transform hover:rotateY-5 hover:scale-105 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden relative cursor-pointer" onClick={() => openModal(index, currentImageIndex[index] || 0)}>
                    <img
                      src={project.images[currentImageIndex[index] || 0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2">
                      <button
                        className="bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevImage(index);
                        }}
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        className="bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextImage(index);
                        }}
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <div className="h-32 overflow-y-auto mb-4 text-gray-300 text-sm">
                      <p>{project.description}</p>
                    </div>
                    <div className="mt-auto">
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
                      {(project.liveUrl || project.githubUrl) && (
                        <>
                          <div className="border-t border-gray-700/50 my-3"></div>
                          <div className="flex flex-wrap gap-3">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-3 py-1.5 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-md text-sm font-medium text-white border border-pink-500/40 hover:from-pink-500/40 hover:to-purple-500/40 transition-all hover:scale-105 shadow-sm"
                              >
                                <ExternalLink size={14} className="mr-1.5" />
                                Live Demo
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-3 py-1.5 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-md text-sm font-medium text-white border border-cyan-500/40 hover:from-cyan-500/40 hover:to-blue-500/40 transition-all hover:scale-105 shadow-sm"
                              >
                                <Github size={14} className="mr-1.5" />
                                GitHub
                              </a>
                            )}
                          </div>
                        </>
                      )}
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
              <FaWhatsapp size={24} />
              <span className="text-lg font-semibold">WhatsApp</span>
            </a>
          </div>
          <div className="text-center space-y-2 text-gray-400">
            <p className="flex items-center justify-center space-x-2">
              <Mail size={16} />
              <span>sesegueni@gmail.com</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <MapPin size={16} />
              <span>Algiers, Algeria</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <Phone size={16} />
              <span>+213 790410947</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <FaDiscord size={16} className="mr-1" />
              <span>se1f0</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/30 bg-black/50">
        <div className="container mx-auto text-center text-gray-400">
          <p>
            &copy; 2025 Seif Eddine Segueni. The right man in the wrong place
            can make all the difference in the world
          </p>
        </div>
      </footer>
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={() => closeModal()}
        >
          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Project Image"
              className="w-full h-auto object-contain rounded-lg shadow-2xl max-h-[85vh]"
            />
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                prevModalImage();
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                nextModalImage();
              }}
            >
              <ChevronRight size={20} />
            </button>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
