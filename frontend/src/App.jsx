import MoodPlayer from "./components/MoodPlayer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl font-bold mb-4">Moody Player</h1>
        <MoodPlayer />
      </div>
    </div>
  );
};

export default App;
