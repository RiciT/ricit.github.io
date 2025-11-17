import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 7;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pages = [
    { name: 'Home', component: <HomePage /> },
    { name: 'Work Experience', component: <WorkExperiencePage /> },
    { name: 'Scientific Accomplishments', component: <ScientificPage /> },
    { name: 'Projects', component: <ProjectsPage /> },
    { name: 'Volunteering', component: <VolunteeringPage /> },
    { name: 'Skills', component: <SkillsPage /> },
    { name: 'Hobbies', component: <HobbiesPage /> }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-8">
      <div className="relative w-full max-w-6xl h-[85vh]">
        {/* Book Container */}
        <div className="relative bg-white rounded-lg shadow-2xl h-full flex flex-col">
          {/* Page Curl Effect - Top Right */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none z-10">
            <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-gray-200 border-r-transparent"></div>
          </div>

          {/* Header with page navigation */}
          <div className="flex-shrink-0 border-b border-gray-200 bg-white rounded-t-lg">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className={`p-2 rounded-full transition-all ${
                    currentPage === 0
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-amber-700 hover:bg-amber-100'
                  }`}
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-sm text-gray-600">
                  Page {currentPage + 1} of {totalPages}
                </span>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className={`p-2 rounded-full transition-all ${
                    currentPage === totalPages - 1
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-amber-700 hover:bg-amber-100'
                  }`}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <h2 className="text-lg font-serif font-semibold text-gray-800">
                {pages[currentPage].name}
              </h2>
            </div>
          </div>

          {/* Page Content - Scrollable */}
          <div className="flex-1 overflow-y-auto px-12 py-8 scrollbar-hide">
            {pages[currentPage].component}
          </div>

          {/* Page number at bottom */}
          <div className="flex-shrink-0 pb-6 pr-12 text-right">
            <span className="text-sm text-gray-400 font-serif">{currentPage + 1}</span>
          </div>
        </div>

        {/* Book Spine Effect */}
        <div className="absolute left-0 top-8 bottom-8 w-3 bg-gradient-to-r from-amber-900 via-amber-700 to-amber-600 rounded-l shadow-lg"></div>
      </div>
    </div>
  );
};

const HomePage = () => (
  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
    <h1 className="text-6xl font-serif font-bold text-amber-900 mb-4">
      Your Name
    </h1>
    <p className="text-2xl text-gray-600 max-w-2xl">
      Portfolio & Professional Journey
    </p>
    <div className="mt-8 text-gray-500">
      <p>Use the arrows to navigate through the pages</p>
    </div>
  </div>
);

const WorkExperiencePage = () => {
  const experiences = [
    { year: '2023', title: 'Senior Software Engineer', company: 'Tech Corp', description: 'Led development team in creating scalable microservices architecture. Mentored junior developers and established best practices for code quality and testing.' },
    { year: '2021', title: 'Software Engineer', company: 'StartUp Inc', description: 'Built full-stack web applications using React and Node.js. Implemented CI/CD pipelines and improved deployment efficiency by 40%.' },
    { year: '2019', title: 'Junior Developer', company: 'Digital Agency', description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect interfaces.' },
    { year: '2018', title: 'Intern', company: 'Innovation Lab', description: 'Assisted senior developers with feature development and bug fixes. Learned agile methodologies and modern development practices.' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-12 text-amber-900">
        Work Experience
      </h2>
      
      <div className="relative pl-12">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-amber-300"></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12 last:mb-0">
            {/* Timeline dot */}
            <div className="absolute -left-8 w-5 h-5 rounded-full bg-amber-600 border-4 border-white shadow-md"></div>
            
            <div className="ml-4">
              <div className="text-sm font-semibold text-amber-700 mb-2">{exp.year}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
              <p className="text-gray-600 font-medium mb-3">{exp.company}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ScientificPage = () => {
  const accomplishments = [
    { year: '2024', title: 'Published Research Paper', venue: 'Journal of Advanced Computing', description: 'Presented a novel approach to machine learning optimization that improved training efficiency by 35%. Paper was accepted for publication in a peer-reviewed journal.' },
    { year: '2023', title: 'Conference Presentation', venue: 'International Tech Conference', description: 'Presented research findings on distributed systems architecture to an audience of 500+ attendees. Received excellent feedback and engaged in meaningful discussions.' },
    { year: '2022', title: 'Grant Award', venue: 'Research Foundation', description: 'Received competitive research grant worth $50,000 for AI research project exploring novel neural network architectures.' },
    { year: '2021', title: 'Patent Filed', venue: 'USPTO', description: 'Filed patent for innovative data processing method that reduces computational complexity while maintaining accuracy.' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-12 text-amber-900">
        Scientific Accomplishments
      </h2>
      
      <div className="relative pl-12">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-amber-300"></div>
        
        {accomplishments.map((acc, index) => (
          <div key={index} className="relative mb-12 last:mb-0">
            {/* Timeline dot */}
            <div className="absolute -left-8 w-5 h-5 rounded-full bg-amber-600 border-4 border-white shadow-md"></div>
            
            <div className="ml-4">
              <div className="text-sm font-semibold text-amber-700 mb-2">{acc.year}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{acc.title}</h3>
              <p className="text-gray-600 font-medium mb-3">{acc.venue}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{acc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = [
    { title: 'E-Commerce Platform', description: 'Full-stack web application with payment integration, user authentication, and real-time inventory management', tech: ['React', 'Node.js', 'MongoDB'], image: '🛒' },
    { title: 'Mobile Fitness App', description: 'Cross-platform mobile app for workout tracking with social features and progress analytics', tech: ['React Native', 'Firebase'], image: '💪' },
    { title: 'Data Visualization Tool', description: 'Interactive dashboard for business analytics with customizable charts and real-time data updates', tech: ['D3.js', 'Python', 'PostgreSQL'], image: '📊' },
    { title: 'AI Chatbot', description: 'Intelligent customer service automation using natural language processing and machine learning', tech: ['NLP', 'TensorFlow', 'FastAPI'], image: '🤖' }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-12 text-amber-900">
        Projects
      </h2>
      
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-amber-400 hover:shadow-lg transition-all bg-white">
            <div className="text-5xl mb-4 text-center">{project.image}</div>
            <h3 className="font-bold text-xl mb-3 text-gray-800">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const VolunteeringPage = () => {
  const volunteering = [
    { org: 'Local Food Bank', role: 'Volunteer Coordinator', description: 'Organized weekly food distribution events serving 200+ families. Managed volunteer schedules and coordinated with local businesses for donations.', image: '🍎' },
    { org: 'Code for Good', role: 'Programming Mentor', description: 'Taught programming fundamentals to underserved youth. Developed curriculum and provided one-on-one mentoring sessions.', image: '💻' },
    { org: 'Environmental Club', role: 'Active Member', description: 'Participated in community cleanup initiatives and organized awareness campaigns about environmental conservation.', image: '🌱' },
    { org: 'Animal Shelter', role: 'Weekend Helper', description: 'Cared for rescue animals, assisted with adoption events, and helped maintain shelter facilities every weekend.', image: '🐕' }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-12 text-amber-900">
        Volunteering
      </h2>
      
      <div className="grid grid-cols-2 gap-8">
        {volunteering.map((vol, index) => (
          <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-amber-400 hover:shadow-lg transition-all bg-white">
            <div className="text-5xl mb-4 text-center">{vol.image}</div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">{vol.org}</h3>
            <p className="text-sm text-amber-700 mb-3 font-semibold">{vol.role}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{vol.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsPage = () => {
  const skillCategories = [
    { 
      category: 'Programming Languages', 
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go'],
      image: '⌨️'
    },
    { 
      category: 'Frameworks & Libraries', 
      skills: ['React', 'Node.js', 'Django', 'TensorFlow', 'Express', 'Next.js'],
      image: '🔧'
    },
    { 
      category: 'Tools & Technologies', 
      skills: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Redis'],
      image: '🛠️'
    },
    { 
      category: 'Soft Skills', 
      skills: ['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration', 'Mentoring', 'Project Management'],
      image: '🤝'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-12 text-amber-900">
        Skills
      </h2>
      
      <div className="grid grid-cols-2 gap-8">
        {skillCategories.map((cat, index) => (
          <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-amber-400 hover:shadow-lg transition-all bg-white">
            <div className="text-5xl mb-4 text-center">{cat.image}</div>
            <h3 className="font-bold text-xl mb-4 text-gray-800 text-center">{cat.category}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {cat.skills.map((skill, i) => (
                <span key={i} className="text-sm px-3 py-1.5 bg-amber-100 text-amber-800 rounded-full font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HobbiesPage = () => (
  <div className="h-full flex flex-col items-center justify-center space-y-8">
    <h2 className="text-3xl font-serif font-bold text-center text-amber-900">
      Hobbies & Interests
    </h2>
    
    <div className="grid grid-cols-3 gap-12 text-center max-w-2xl">
      <div>
        <div className="text-6xl mb-3">📚</div>
        <p className="text-gray-700 font-medium">Books</p>
      </div>
      <div>
        <div className="text-6xl mb-3">🎵</div>
        <p className="text-gray-700 font-medium">Music</p>
      </div>
      <div>
        <div className="text-6xl mb-3">✈️</div>
        <p className="text-gray-700 font-medium">Travel</p>
      </div>
    </div>
  </div>
);

export default App;