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

export default SkillsPage;