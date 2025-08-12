import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ImageModal from "./components/ImageModal";
import RetroGrid from "./components/RetroGrid";

// Import types
import { NavLink, Project, SkillCategory, Education as EducationType, Experience as ExperienceType } from "./types";

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
    // Set initial active section to hero
    setActiveSection("hero");
    
    // Force scroll to top with multiple methods to ensure it works
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    // Delay to ensure the scroll happens after component mount
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);
    
    return () => clearTimeout(timer);
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
      // Find all sections and their positions
      const sectionPositions = sections.map(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return { id: section, top: rect.top, bottom: rect.bottom };
        }
        return null;
      }).filter(Boolean) as Array<{ id: string; top: number; bottom: number }>;
      
      // Sort sections by their distance from the viewport top
      const sortedSections = [...sectionPositions].sort((a, b) => {
        const aDistance = Math.abs(a.top);
        const bDistance = Math.abs(b.top);
        return aDistance - bDistance;
      });
      
      // Find the first section that's either in view or closest to being in view
      if (sortedSections.length > 0) {
        // Special case for the last section (contact)
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
          setActiveSection("contact");
        } else {
          // Check if any section is in the viewport
          const visibleSection = sectionPositions.find(section => 
            section && section.top <= 100 && section.bottom >= 100
          );
          
          if (visibleSection) {
            setActiveSection(visibleSection.id);
          } else if (sortedSections[0]) {
            setActiveSection(sortedSections[0].id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial active section based on scroll position
    setTimeout(handleScroll, 200);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  const navLinks: NavLink[] = [
    { id: "about", title: "about" },
    { id: "skills", title: "skills" },
    { id: "education", title: "education" },
    { id: "experience", title: "experience" },
    { id: "projects", title: "projects" },
    { id: "contact", title: "contact" },
  ];

  const skillCategories: SkillCategory[] = [
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

  const education: EducationType[] = [
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

  const experiences: ExperienceType[] = [
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

  const projects: Project[] = [
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

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Analytics />
      <SpeedInsights />
      
      {/* Retro Grid Background */}
      <RetroGrid />
      
      {/* Header Component */}
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        navLinks={navLinks} 
      />

      {/* Hero Component */}
      <Hero 
        scrollY={scrollY} 
        scrollToSection={scrollToSection} 
      />

      {/* About Component */}
      <About age={age} />

      {/* Skills Component */}
      <Skills skillCategories={skillCategories} />

      {/* Education Component */}
      <Education education={education} />

      {/* Experience Component */}
      <Experience experiences={experiences} />

      {/* Projects Component */}
      <Projects 
        projects={projects} 
        openModal={openModal} 
      />

      {/* Contact Component */}
      <Contact />

      {/* Footer Component */}
      <Footer />

      {/* Image Modal Component */}
      <ImageModal 
        modalImage={modalImage}
        closeModal={closeModal}
        nextModalImage={nextModalImage}
        prevModalImage={prevModalImage}
      />
    </div>
  );
}

export default App;
