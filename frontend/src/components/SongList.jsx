import { useEffect, useRef, useState } from "react";
import SongCard from "./SongCard";
import api from "../api/api";
import SongCardSkeleton from "./skeleton/SongCardSkeleton";

const SongList = ({ mood }) => {
  const [songs, setSongs] = useState([]);
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const audioRef = useRef(new Audio());
  const [loading, setLoading] = useState(false);

  const handlePlay = (audioUrl, songId) => {
    const audio = audioRef.current;

    if (currentPlayingId === songId) {
      audio.pause();
      setCurrentPlayingId(null);
    } else {
      audio.src = audioUrl;
      audio.play();
      setCurrentPlayingId(songId);

      audio.onended = () => setCurrentPlayingId(null);
    }
  };

  useEffect(() => {
    const getSongsByMood = async () => {
      try {
        setLoading(true);
        console.log("Mood requested:", mood);
        const res = await api.get(`/songs?mood=${mood.toLowerCase()}`);
        if (res.status === 200) {
          setSongs(res.data.data);
        } else {
          console.warn("Unexpected response:", res);
        }
      } catch (err) {
        console.error("Error fetching songs:", err);
      } finally {
        setLoading(false);
      }
    };

    getSongsByMood();
  }, [mood]);
  return (
    <div className="space-y-4">
      {loading
        ? Array.from({ length: 5 }).map((_, idx) => (
            <SongCardSkeleton key={idx} />
          ))
        : songs.map((song) => (
            <SongCard
              key={song._id}
              id={song._id}
              title={song.title}
              artist={song.author}
              audio={song.audio}
              isPlaying={currentPlayingId === song._id}
              onPlay={handlePlay}
            />
          ))}
    </div>
  );
};

export default SongList;
