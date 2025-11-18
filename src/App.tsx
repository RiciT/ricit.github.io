import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HomePage from './pages/HomePage.tsx'
import TimelineTypePage from './pages/TimelinePage.tsx';
import CardTypePage from './pages/CardPage.tsx';
import HobbiesPage from './pages/HobbiesPage.tsx';
import SkillsPage from './pages/SkillsPage.tsx';

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

export default App;