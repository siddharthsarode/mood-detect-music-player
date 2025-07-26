import MoodPlayer from "./components/MoodPlayer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center">
          <img src="/music-logo.svg" alt="Moody player logo" />
          <h1 className="text-2xl text-blue-700 font-bold">EchoMood</h1>
        </div>

        <MoodPlayer />
      </div>
    </div>
  );
};

export default App;
