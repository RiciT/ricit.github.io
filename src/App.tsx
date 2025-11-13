import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Code, Briefcase, GraduationCap, Award, Menu, X } from "lucide-react";

//#region Type Definitions
type ContactInfo = {
  name: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  playstore: string;
};

type Link = {
  label: string;
  href: string;
};

type WorkExperience = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string[];
  links?: Link[];
};

type Education = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string[];
};

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  links: Link[];
};

type Achievement = {
  title: string;
  detail: string;
  year: string;
};

type Skills = {
  programming: string[];
  frameworks: string[];
  tools: string[];
  languages: string[];
};

type PageType = "main" | "hobbies";

// Data
const CONTACT: ContactInfo = {
  name: "Tamas Balint Farago",
  location: "Amsterdam",
  email: "tamas.balint.farago@gmail.com",
  linkedin: "https://www.linkedin.com/in/tamas-farago-077535291/",
  github: "https://www.github.com/RiCiT",
  playstore: "https://play.google.com/store/apps/details?id=com.alphacademy.alphasolve",
};

const WORK: WorkExperience[] = [
  {
    id: "alpha",
    title: "AlphaSolve",
    subtitle: "Developer / Prompt Engineer",
    date: "2025 – present",
    location: "Remote",
    description: ["AI startup developing a wrapper application for solving mathematical questions", "Technologies: Python, Kotlin, Google Gemini API, Supabase"],
    links: [{ label: "Play Store", href: CONTACT.playstore }],
  },
  {
    id: "radion",
    title: "Radion Amsterdam",
    subtitle: "Club Runner",
    date: "2023 – 2025",
    location: "Amsterdam",
    description: ["Industrial-chic bar & cafe in a cultural event space", "Demonstrated teamwork, time management, and a strong work ethic"],
  },
  {
    id: "besk",
    title: "BESK Group",
    subtitle: "Student Developer",
    date: "2021",
    location: "Budapest / Germany",
    description: ["Software development and documentation of Scrumpanion application", "Technologies: TypeScript, Java, JavaDoc, Jira, Scrum"],
    links: [{ label: "Scrumpanion", href: "https://scrumpanion-scrum-planning-po.en.softonic.com/android" }],
  },
];

const EDUCATION: Education[] = [
  {
    id: "vu-math",
    title: "Vrije Universiteit Amsterdam",
    subtitle: "BSc Mathematics",
    date: "2024 – 2027",
    description: ["Currently pursuing a degree in Mathematics in Amsterdam"],
  },
  {
    id: "vu-ai",
    title: "Vrije Universiteit Amsterdam",
    subtitle: "BSc Artificial Intelligence (discontinued)",
    date: "2023 – 2024",
    description: ["Discontinued to pursue a more aligned academic focus"],
  },
  {
    id: "berzsenyi",
    title: "Berzsenyi Dániel Gimnázium",
    subtitle: "Advanced Physics and CS",
    date: "2019 – 2023",
    description: ["High school specialization in physics and computer science"],
  },
];

const PROJECTS: Project[] = [
  {
    id: "cobble",
    title: "Cobble",
    description: "Turing-complete language & compiler",
    tech: ["C++", "React", "TypeScript", "Node.js"],
    links: [
      { label: "Compiler", href: "https://github.com/RiCiT/Cobble_Compiler" },
      { label: "Web Editor", href: "https://github.com/RiCiT/Cobble_WebEditor" },
    ],
  },
  {
    id: "stirling",
    title: "Stirling",
    description: "C# simulator for Stirling engine particle physics",
    tech: ["C#", "Physics Simulation"],
    links: [{ label: "GitHub", href: "https://github.com/RiCiT/Stirling" }],
  },
  {
    id: "pis",
    title: "Project Intelligent System",
    description: "AI strategies for Schnapsen card game",
    tech: ["Python", "AI", "Game Theory"],
    links: [{ label: "GitHub", href: "https://github.com/RiCiT/Project-Intelligent-Systems" }],
  },
];

const ACHIEVEMENTS: Achievement[] = [
  { title: "Ludum Dare Game Jam", detail: "180th in LD58 (2025)", year: "2025" },
  { title: "OKTV Computer Science", detail: "National finals qualification", year: "2022" },
  { title: "University Science Conference", detail: "Alpha-Stirling Motors simulation", year: "2022" },
  { title: "FIRST LEGO League", detail: "World Festival Silver & Best Programming", year: "2019" },
];

const SKILLS: Skills = {
  programming: ["C#", "Python", "C++", "JavaScript", "TypeScript", "Java", "Kotlin", "Julia"],
  frameworks: ["React", "Unity", "Flutter", "Node.js", "Express"],
  tools: ["Git", "VS Code", "Jupyter", "LaTeX"],
  languages: ["English (fluent)", "Hungarian (native)", "German (basic)"],
};
//#endregion

function Navigation({ currentPage, onNavigate }: { currentPage: PageType; onNavigate: (page: PageType) => void }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
          >
            TF
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate("main")}
              className={`text-sm font-medium transition-colors ${
                currentPage === "main" ? "text-blue-400" : "text-neutral-400 hover:text-white"
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => onNavigate("hobbies")}
              className={`text-sm font-medium transition-colors ${
                currentPage === "hobbies" ? "text-blue-400" : "text-neutral-400 hover:text-white"
              }`}
            >
              Hobbies
            </button>
            <a href={`mailto:${CONTACT.email}`} className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 transition-all">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-neutral-400">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <button
                  onClick={() => { onNavigate("main"); setIsOpen(false); }}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    currentPage === "main" ? "text-blue-400" : "text-neutral-400"
                  }`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => { onNavigate("hobbies"); setIsOpen(false); }}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    currentPage === "hobbies" ? "text-blue-400" : "text-neutral-400"
                  }`}
                >
                  Hobbies
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function StickyNote({ children, color = "yellow", rotation = 0, delay = 0 }: { 
  children: React.ReactNode; 
  color?: "yellow" | "blue" | "pink" | "green"; 
  rotation?: number; 
  delay?: number;
}) {
  const colors = {
    yellow: "bg-yellow-100 border-yellow-200",
    blue: "bg-blue-100 border-blue-200",
    pink: "bg-pink-100 border-pink-200",
    green: "bg-green-100 border-green-200",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotation }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      className={`${colors[color]} p-4 rounded-lg shadow-lg border-t-4 relative`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="absolute top-2 left-2 w-8 h-8 bg-black/5 rounded-full" />
      {children}
    </motion.div>
  );
}

function ProjectNode({ project, x, y, index }: { project: Project; x: number; y: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.15, type: "spring" }}
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="relative">
        {/* Connecting line effect */}
        {index > 0 && (
          <div className="absolute -left-20 top-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent to-blue-500/30" />
        )}
        
        <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-2xl border border-neutral-700 shadow-2xl hover:shadow-blue-500/20 transition-all hover:scale-105 hover:border-blue-500/50 w-72">
          <h3 className="text-lg font-bold mb-2 text-blue-400">{project.title}</h3>
          <p className="text-sm text-neutral-300 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-neutral-700/50 rounded-full text-neutral-300">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded-full text-blue-400 border border-blue-500/30 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MainPage() {
  const positions = [
    { x: 5, y: 10 },
    { x: 35, y: 35 },
    { x: 65, y: 15 },
  ];

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Sticky Notes */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              {CONTACT.name}
            </h1>
            <p className="text-xl text-neutral-400">Software & AI Developer • Musician • Mathematics Student</p>
          </div>

          <div className="grid grid-rows-1 md:grid-rows-3 gap-6 max-w-4xl mx-auto">
            <StickyNote color="yellow" rotation={-2} delay={0.1}>
              <div className="text-neutral-800">
                <MapPin size={20} className="mb-2" />
                <p className="font-bold text-sm">Location</p>
                <p className="text-sm">{CONTACT.location}</p>
              </div>
            </StickyNote>

            <StickyNote color="blue" rotation={1} delay={0.2}>
              <div className="text-neutral-800">
                <Mail size={20} className="mb-2" />
                <p className="font-bold text-sm">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="text-xs hover:underline break-all">
                  {CONTACT.email}
                </a>
              </div>
            </StickyNote>

            <StickyNote color="pink" rotation={-1} delay={0.3}>
              <div className="text-neutral-800">
                <Code size={20} className="mb-2" />
                <p className="font-bold text-sm">Links</p>
                <div className="space-y-1 text-xs">
                  <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="block hover:underline">GitHub</a>
                  <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:underline">LinkedIn</a>
                </div>
              </div>
            </StickyNote>
          </div>
        </motion.section>

        {/* Projects - Node System */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <Code className="text-blue-400" />
            Projects
          </motion.h2>
          
          <div className="relative h-[600px] bg-gradient-to-b from-neutral-900/50 to-transparent rounded-3xl border border-neutral-800 overflow-hidden">
            <div className="absolute inset-0" style={{ 
              backgroundImage: "radial-gradient(circle at 1px 1px, rgb(64 64 64 / 0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px"
            }} />
            {PROJECTS.map((project, index) => (
              <ProjectNode key={project.id} project={project} {...positions[index]} index={index} />
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <Briefcase className="text-violet-400" />
            Work Experience
          </motion.h2>
          <div className="grid gap-6">
            {WORK.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-neutral-900/80 to-neutral-900/40 p-6 rounded-2xl border border-neutral-800 hover:border-violet-500/50 transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-violet-400">{job.title}</h3>
                    <p className="text-neutral-400">{job.subtitle}</p>
                  </div>
                  <span className="text-sm text-neutral-500">{job.date}</span>
                </div>
                <ul className="space-y-2 text-sm text-neutral-300 mb-3">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                {job.links && (
                  <div className="flex gap-2">
                    {job.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1 bg-violet-500/20 rounded-full text-violet-400 border border-violet-500/30 hover:bg-violet-500/30 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Achievements Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Education */}
          <section>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <GraduationCap className="text-green-400" />
              Education
            </motion.h2>
            <div className="space-y-4">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800"
                >
                  <h3 className="font-bold text-green-400">{edu.title}</h3>
                  <p className="text-sm text-neutral-400">{edu.subtitle}</p>
                  <p className="text-xs text-neutral-500 mt-1">{edu.date}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <Award className="text-yellow-400" />
              Achievements
            </motion.h2>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800"
                >
                  <h3 className="font-bold text-yellow-400">{achievement.title}</h3>
                  <p className="text-sm text-neutral-300">{achievement.detail}</p>
                  <p className="text-xs text-neutral-500 mt-1">{achievement.year}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Skills */}
        <section>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SKILLS).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 p-6 rounded-2xl border border-neutral-800"
              >
                <h3 className="font-bold mb-4 capitalize text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="text-xs px-3 py-1 bg-neutral-800/60 rounded-full text-neutral-300 border border-neutral-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function HobbiesPage() {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Hobbies & Interests
          </h1>
          <p className="text-xl text-neutral-400">Beyond the code</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <StickyNote color="pink" rotation={-1} delay={0.2}>
            <div className="text-neutral-800">
              <h3 className="font-bold text-lg mb-2">🎵 Music</h3>
              <p className="text-sm">
                Passionate musician exploring various genres and instruments. Music is my creative outlet outside of programming.
              </p>
            </div>
          </StickyNote>

          <StickyNote color="blue" rotation={1} delay={0.3}>
            <div className="text-neutral-800">
              <h3 className="font-bold text-lg mb-2">🎮 Game Development</h3>
              <p className="text-sm">
                Regular participant in Ludum Dare game jams since 2019. Love creating interactive experiences and pushing creative boundaries.
              </p>
            </div>
          </StickyNote>

          <StickyNote color="yellow" rotation={2} delay={0.4}>
            <div className="text-neutral-800">
              <h3 className="font-bold text-lg mb-2">🤝 Community Work</h3>
              <p className="text-sm">
                Active in organizing youth camps, tutoring, and volunteer work. Passionate about giving back and helping others grow.
              </p>
            </div>
          </StickyNote>

          <StickyNote color="green" rotation={-2} delay={0.5}>
            <div className="text-neutral-800">
              <h3 className="font-bold text-lg mb-2">📚 Continuous Learning</h3>
              <p className="text-sm">
                Always exploring new technologies, mathematical concepts, and challenging myself with competitions and projects.
              </p>
            </div>
          </StickyNote>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-neutral-900/80 to-neutral-900/40 p-8 rounded-3xl border border-neutral-800"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">More Coming Soon!</h2>
          <p className="text-neutral-400 text-center">
            This section is a work in progress. Check back later for more details about my hobbies and interests.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("main");

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentPage === "main" ? <MainPage /> : <HobbiesPage />}
        </motion.div>
      </AnimatePresence>

      <footer className="py-8 text-sm text-neutral-500 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} {CONTACT.name}</p>
        </div>
      </footer>
    </div>
  );
}