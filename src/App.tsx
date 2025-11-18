import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 8;

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

  //#region data
  const myEducation = [
    { year: '2024 - (2027)', title: 'Vrije Universiteit Amsterdam', place: 'BSc Mathematics', description: '' },
    { year: '2023 - 2024', title: 'Vrije Universiteit Amsterdam', place: 'BSc Artificial Intelligence', description: 'discontinued to pursue a more aligned academic focus.' },
    { year: '2019 - 2023', title: 'Berzsenyi Dániel Gimnázium', place: 'Advanced Physics and Computer Science class', description: '' },
  ];

  const myExperiences = [
    { year: '2025 - Present', title: 'Developer / Prompt Engineer', place: 'AlphaSolve', description: 'Remote\nAI startup developing a wrapper application for solving mathematical questions.\nPython, Kotlin, Google Gemini API, Supabase' },
    { year: '2023 - 2025', title: 'Club Runner', place: 'Radion Amsterdam', description: 'Amsterdam\nIndustrial-chic bar & cafe in a cultural event space\nDemonstrated teamwork, time management, and a strong work ethic with 12 hour shifts requiring a lot of attention and endurance.' },
    { year: '2021', title: 'Student Developer', place: 'BESK Group', description: 'Budapest/Germany\nGlobally operated IT software development and consulting company\nSoftware development and documentation of Scrumpanion application\nTypescript, Java, JavaDoc, Jira, Scrum' },
    { year: '2020', title: 'Student Consultant', place: 'Collonade Insurance S.A', description: 'Leading insurer specializing in innovative solutions for consumers and companies\nUnified Policy Document Formatting and verification\nMS Word' }
  ];

  const myVolunteering = [
    { title: 'Hungarian Youth Association', role: 'Project Developer', description: '2024-2025\n\'Lakásbázis\' project developer', image: '🍎' },
    { title: 'Freshmen Camp', role: 'Team Lead / Alumni Organizer', description: '2020 - 2025', image: '💻' },
    { title: 'Bútkemp', role: 'Lead Organizer', description: '2023\nsecondary school youth summer camp', image: '🌱' },
    { title: 'World Robot Olympiad', role: 'Organizer & team guide', description: '2019\nNational Final, Tatabánya', image: '🐕' },
    { title: 'Tutoring', role: 'Teacher and tutor', description: 'Programming, mathematics and physics probono', image: '🐕' },
    { title: 'Student Council', role: 'Part of Student Council', description: 'And Finalist team for the Student Council Leadership of Berzsenyi Dániel Gimnázium', image: 'egaeg' }
  ];


  const myAccomplishments = [
    { year: '2025', title: 'Ludum dare - Game Jam', place: 'see ldjam.com', description: '180th in LD58' },
    { year: '2024', title: 'Ludum dare - Game Jam', place: 'see ldjam.com', description: 'LD56' },
    { year: '2023', title: 'Ludum dare - Game Jam', place: 'see ldjam.com', description: 'LD54' },
    { year: '2022', title: 'Hungarian National Science Competition (OKTV)', place: 'National Competition', description: 'national finals qualification,\nComputer Science,\nindividual' },
    { year: '2022', title: 'Hungarian National Science Competition (OKTV)', place: 'National Competition', description: 'national finals qualification,\nMathematics,\nindividual' },
    { year: '2022', title: 'University Science Conference (TDK)', place: 'Eötvös Loránd University (ELTE), Institute of Physics', description: 'Modelling and Simulation of Particle Physics in Alpha-Stirling Engines,\nTeam of two,\nConsultants: Ákos Horváth PhD, Associate Professor (ELTE); Zoltán Csernovszky PhD, BDG'},
    { year: '2022', title: 'Young Scientist Competition (Ifjú Tudósok)', place: 'Hungarian National Finals', description: 'Computer Science,\n9th place,\nIndividual' },
    { year: '2022', title: 'Ludum dare - Game Jam', place: 'see ldjam.com', description: 'LD50' },
    { year: '2021', title: 'Hungarian National Science Competition (OKTV)', place: 'National Competition', description: 'national finals qualification,\nComputer Science,\nindividual' },
    { year: '2021', title: 'Hungarian National Science Competition (OKTV)', place: 'National Competition', description: 'national finals qualification,\nMathematics,\nindividual' },
    { year: '2019', title: 'Ludum dare - Game Jam', place: 'see ldjam.com', description: 'LD45' },
    { year: '2019', title: 'FIRST LEGO League', place: 'V4 Finals International', description: 'Robotics Competition,\nTeam Töviscsapat\n1st Place Robot Design and Programming\nCity Shaper, team competition' },
    { year: '2018', title: 'Vigyázz, Kész, Pénz! ("Ready, Set, Money!")', place: 'National Final', description: 'K&H Bank - Banking, Economics, and Finance Competition\n1st Place\nTeam competition' },
    { year: '2018', title: 'Vigyázz, Kész, Pénz! ("Ready, Set, Money!")', place: 'Budapest Final', description: 'K&H Bank - Banking, Economics, and Finance Competition\n3rd Place\nTeam competition' },
    { year: '2018', title: 'FIRST LEGO League', place: 'World Festival, USA', description: 'Robotics Competition,\nTeam Töviscsapat\nChampion Finalist/Silver medal\nInto Orbit, team competition' },
    { year: '2018', title: 'FIRST LEGO League', place: 'Central European Finals', description: 'Robotics Competition,\nTeam Töviscsapat\nBest Programming Award\nInto Orbit, team competition' },
    { year: '2018', title: 'Bányai Júlia National Robotics Competition', place: 'National Finals', description: '12th place,\nTeam of two' },
    { year: '...', title: '', place: '', description: 'Will add more when I get home and get my older competition results since I am also very proud of those however I don\'t know those results from the top of my head...' },
  ];

  const myProjects = [
    { title: 'Cobble Compiler', description: '', tech: ['C++', 'CMake', 'Assembly', 'Nasm'], image: '🛒' },
    { title: 'Cobble Web Editor', description: '', tech: ['ReactJS', 'TypeScript', 'Node.js', 'ExpressJS','Docker', 'Monaco Editor'], image: '💪' },
    { title: 'ChordsFinder', description: '', tech: ['C#', 'MIDI'], image: '💪' },
    { title: 'Project Intelligent Systems', description: '', tech: ['Python', 'SKLearn'], image: '💪' },
    { title: 'HB Application', description: '', tech: ['Flutter', 'Dart', 'Firebase', 'Swift'], image: '💪' },
    { title: 'Ludum Dare 58 - Blood and Bounty', description: '', tech: ['Unity', 'C#', 'WebGL', 'HLSL'], image: '📊' },
    { title: 'Multiple Unkown Equations Solver with Determinants', description: '', tech: ['C#'], image: '💪' },
    { title: 'Ludum Dare 56 - Rat Dead Redemption', description: '', tech: ['Unity3D', 'C#', 'WebGL', 'HLSL'], image: '🤖' },
    { title: 'Alpha-Stirling Engine Simulation', description: '', tech: ['C#'], image: '💪' },
    { title: 'Ludum Dare 54 - Void Hunter', description: '', tech: ['Unity', 'C#', 'WebGL'], image: '📊' },
    { title: 'TicTacToe', description: '', tech: ['Processing', 'Java'], image: '💪' },
    { title: 'Online class attender', description: '', tech: ['C#', 'Google API'], image: '💪' },
    { title: 'Ludum Dare 50 - Blasty Tag', description: '', tech: ['Unity', 'C#', 'WebGL'], image: '🤖' },
    { title: 'Minesweeper', description: '', tech: ['Processing', 'Java'], image: '💪' },
    { title: 'Game Of Life', description: '', tech: ['Processing', 'Java'], image: '💪' },
    { title: 'SmarTree', description: '', tech: ['React Native', 'Firebase'], image: '💪' },
    { title: '3D Shooter Game', description: '', tech: ['Unity3D', 'C#'], image: '💪' },
    { title: 'Ludum Dare 45 - The Seven', description: '', tech: ['Unity', 'C#'], image: '📊' },
  ];
  //#endregion

  const pages = [
    { name: 'Home', component: <HomePage /> },
    { name: 'Education', component: <TimelineTypePage experiences={myEducation} pageName={"Education"}/>},
    { name: 'Work Experience', component: <TimelineTypePage experiences={ myExperiences } pageName={"Work Experience"}/> },
    { name: 'Scientific Accomplishments', component: <TimelineTypePage experiences={myAccomplishments} pageName={"Scientific Accomplishments"}/> },
    { name: 'Projects', component: <CardTypePage cardData={myProjects} pageName={"Projects"}/> },
    { name: 'Volunteering', component: <CardTypePage cardData={myVolunteering} pageName={"Volunteering"}/> },
    { name: 'Skills', component: <SkillsPage /> },
    { name: 'Hobbies', component: <HobbiesPage /> }
  ];

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-leather-400 via-leather-200 to-leather-600 flex items-center justify-center p-8">
      <div className="relative w-full max-w-6xl h-[85vh]">
        {/* Book Container */}
        <div className="relative bg-linear-to-tr from-paper-50 via-paper-200 to-paper-400 rounded-lg shadow-2xl h-full flex flex-col">
          {/* Page Curl Effect - Top Right */}
          <div className="absolute top-0 right-0 w-25 h-25 overflow-hidden pointer-events-none z-10">
            <div className="absolute top-0 right-0 w-0 h-0 border-l-100 border-t-100 border-l-transparent border-t-burgundy-500"></div>
            <div className="absolute -top-px -right-px w-0 h-0 border-r-101 border-b-101 border-r-transparent border-b-paper-500 shadow-gold-900"></div>
          </div>

          {/* Header with page navigation */}
          <div className="shrink-0 bg-leather-400 rounded-t-lg">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className={`p-2 rounded-full transition-all ${
                    currentPage === 0
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-burgundy-500 hover:bg-gold-400'
                  }`}
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-sm text-ink-700">
                  Page {currentPage + 1} of {totalPages}
                </span>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className={`p-2 rounded-full transition-all ${
                    currentPage === totalPages - 1
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-burgundy-500 hover:bg-gold-400'
                  }`}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Page Content - Scrollable */}
          <div className="flex-1 overflow-y-auto px-12 py-8 scrollbar-hide">
            {pages[currentPage].component}
          </div>

          {/* Page number at bottom
          <div className="shrink-0 pb-6 pr-12 text-right">
            <span className="text-sm text-gray-400 font-serif">{currentPage + 1}</span>
          </div> */}
        </div>

        {/* Book Spine Effect */}
        <div className="absolute left-0 top-8 bottom-8 w-3 bg-linear-to-r from-burgundy-900 via-burgundy-500 to-burgundy-400 rounded-l shadow-lg"></div>
      </div>
    </div>
  );
};

const HomePage = () => (
  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
    <h1 className="text-6xl font-serif font-bold text-burgundy-600 mb-4">
      Tamas Balint Farago
    </h1>
    <p className="text-2xl text-burgundy-900 max-w-2xl">
      Portfolio & Professional Journey
    </p>
  </div>
);
// Define the type for a single experience
type TimelinePage = {
  year: string;
  title: string;
  place: string;
  description: string;
};
// Define props type
type TimelinePageProps = {
  experiences: TimelinePage[];
  pageName : string;
};
const TimelineTypePage = ({ experiences = [], pageName } : TimelinePageProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-12 text-burgundy-600">
        {pageName}
      </h2>
      
      <div className="relative pl-12">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold-300"></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12 last:mb-0">
            {/* Timeline dot */}
            <div className="absolute -left-8 w-5 h-5 rounded-full bg-burgundy-500 border-4 border-white shadow-md"></div>
            
            <div className="ml-4">
              <div className="text-sm font-semibold text-burgundy-400 mb-2">{exp.year}</div>
              <h3 className="text-xl font-bold text-ink-800 mb-1">{exp.title}</h3>
              <p className="text-ink-600 font-medium mb-2">{exp.place}</p>
              <div className="">{exp.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  <p className="text-ink-700 -mb-0.5 text-sm leading-relaxed">{line}</p>
                </React.Fragment>
              ))}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// Define the type for a single experience
type CardPage = {
  title: string;
  role?: string;
  description: string;
  tech?: string[];
  image: string;
};
// Define props type
type CardPageProps = {
  cardData: CardPage[];
  pageName : string;
};

const CardTypePage = ({ cardData = [], pageName} : CardPageProps) => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-12 text-burgundy-600">
        {pageName}
      </h2>
      
      <div className="grid grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div key={index} className="border-2 border-paper-400 rounded-lg p-6 hover:border-burgundy-500 hover:shadow-lg transition-all bg-paper-50">
            <div className="text-5xl mb-4 text-center">{card.image}</div>
            <h3 className="font-bold text-xl mb-3 text-ink-800">{card.title}</h3>
            <p className="text-sm text-burgundy-600 mb-2 font-semibold">{card?.role}</p>
            <div className="">{card.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  <p className="text-sm text-ink-600 -mb-0.5 leading-relaxed">{line}</p>
                </React.Fragment>
              ))}</div>
            <div className="flex flex-wrap gap-2">
              {card.tech?.map((tech, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-burgundy-300 text-ink-800 rounded-full font-medium">
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

const SkillsPage = () => {
  const skillCategories = [
    { 
      category: 'Programming Languages', 
      skills: ['C#', 'Python', 'C++', 'Processing', 'Julia', 'JavaScript', 'TypeScript', 'Java', 'Latex', "Dart", 'Visual Basic'],
      image: '⌨️'
    },
    { 
      category: 'Frameworks & Environments', 
      skills: ['ReactJS', 'Vite', 'Express', 'Node.js', 'Docker', 'MATLAB', 'Flutter', 'Arduino'],
      image: '🔧'
    },
    { 
      category: 'Software', 
      skills: ['Unity', 'MS Visual Studio Code', 'CLion', 'MS Visual Studio .NET', 'Anaconda', 'Spyder', 'WolframAlpha Mathematica', 'MS Excel', 'Jupyter Notebooks', 'Trello', 'Jira'],
      image: '🛠️'
    },
    { 
      category: 'Version Control', 
      skills: ['Git'],
      image: '🛠️'
    },
    { 
      category: 'Databases', 
      skills: ['Firebase', 'MySQL', 'MS Access'],
      image: '🛠️'
    },
    { 
      category: 'Spoken Languages', 
      skills: ['English (fluent, IELTS grade 8.0)', 'Hungarian (mother tounge)', 'German (basic knowledge)', 'Italian (basic knowledge)'],
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
      
      <div className="grid grid-cols-3 gap-8">
        {skillCategories.map((cat, index) => (
          <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-amber-400 hover:shadow-lg transition-all bg-white">
            <div className="text-5xl mb-4 text-center">{cat.image}</div>
            <h3 className="font-bold text-xl mb-4 text-gray-800 text-center">{cat.category}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {cat.skills.map((skill, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-burgundy-300 text-ink-800 rounded-full font-medium">
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
    
    <div className="grid grid-cols-2 gap-12 text-center max-w-2xl">
      <div>
        <div className="text-6xl mb-3">🎵</div>
        <p className="text-gray-700 font-medium">Music</p>
      </div>
      <div>
        <div className="text-6xl mb-3">📚</div>
        <p className="text-gray-700 font-medium">Books</p>
      </div>
    </div>
  </div>
);

export default App;