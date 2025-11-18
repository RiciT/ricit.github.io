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

export default HobbiesPage;