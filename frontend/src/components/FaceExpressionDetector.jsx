import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import { useState } from "react";
import LiveMoodSkeleton from "./skeleton/LiveMoodSkeleton";

const FaceExpressionDetector = ({ onMoodDetected }) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(false);

  // Load models once on component mount
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]);
      setModelsLoaded(true);
      startVideo();
    };

    loadModels();
  }, []);

  // Start webcam stream
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing webcam:", err));
  };

  // Detect mood once when button is clicked
  const detectMood = async () => {
    if (!videoRef.current) return;
    setLoading(true);
    const detection = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (detection && detection.expressions) {
      const expressions = detection.expressions;
      const sorted = Object.entries(expressions).sort((a, b) => b[1] - a[1]);
      const topExpression = sorted[0];

      console.log("Detected Mood:", topExpression[0]);
      onMoodDetected(topExpression[0]);
      setLoading(false);
    } else {
      console.log("No face detected");
      onMoodDetected("No face detected");
    }
  };

  if (!modelsLoaded) return <LiveMoodSkeleton />;

  return (
    <div className="flex flex-col space-y-5 md:space-x-8 md:flex-row">
      <video ref={videoRef} autoPlay muted className="rounded-md w-fit h-72" />
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold">Live Mood Detection</h2>
        <p className="text-gray-500 text-sm">
          Your current mood is being analyzed in real-time. Enjoy music tailored
          to your feelings.
        </p>
        <button
          onClick={detectMood}
          className="mt-4 px-4 cursor-pointer py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          {loading ? "Detecting..." : "Detect Face"}
        </button>
      </div>
    </div>
  );
};

export default FaceExpressionDetector;
