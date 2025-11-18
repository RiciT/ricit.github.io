import React from "react";

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

export default TimelineTypePage;