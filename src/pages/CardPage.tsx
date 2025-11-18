import React from "react";

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

export default CardTypePage;