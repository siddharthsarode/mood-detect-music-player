import React, { useState } from "react";
import FaceExpressionDetector from "./FaceExpressionDetector";
import SongList from "./SongList";

const MoodPlayer = () => {
  const [mood, setMood] = useState("neutral");
  return (
    <div className="max-w-4xl mx-auto space-y-8 mt-10">
      {/* Left */}
      <div>
        <div className="flex gap-4">
          <FaceExpressionDetector onMoodDetected={setMood} />
        </div>
      </div>

      {/* Right */}
      <div>
        <h2 className="text-xl font-bold mb-4">
          Recommended Tracks <span className="capitalize">({mood})</span>
        </h2>
        <SongList mood={mood} />
      </div>
    </div>
  );
};

export default MoodPlayer;
