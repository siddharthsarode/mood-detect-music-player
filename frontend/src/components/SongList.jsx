import { useEffect, useRef, useState } from "react";
import SongCard from "./SongCard";
import api from "../api/api";

const SongList = ({ mood }) => {
  const [songs, setSongs] = useState([]);
  const audioRef = useRef(new Audio());
  const [currentPlayingId, setCurrentPlayingId] = useState(null);

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
    console.log("use effect called");
    const getSongsByMood = async () => {
      try {
        const res = await api.get(`/songs?mood=${mood || "neutral"}`);
        if (res.statusText === "OK") {
          setSongs(res.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getSongsByMood();
  }, [mood]);
  return (
    <div className="space-y-4">
      {songs.map((song) => (
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
