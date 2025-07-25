import React, { useState } from "react";
import FaceExpressionDetector from "./FaceExpressionDetector";
import SongList from "./SongList";

const MoodPlayer = () => {
  const [mood, setMood] = useState("");
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Left */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Live Mood Detection</h2>
        <div className="flex gap-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="rounded-lg w-36 h-36 object-cover"
          />
          <div>
            <p className="font-semibold">Live Mood Detection</p>
            <p className="text-gray-500 text-sm pb-10">
              Your current mood is being analyzed in real-time. Enjoy music
              tailored to your feelings.
            </p>
            <FaceExpressionDetector onMoodDetected={setMood} />
          </div>
        </div>
      </div>

      {/* Right */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recommended Tracks</h2>
        <SongList mood={mood} />
      </div>
    </div>
  );
};

export default MoodPlayer;
