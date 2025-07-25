import { Pause, Play } from "lucide-react";

const SongCard = ({ id, title, artist, audio, isPlaying, onPlay }) => {
  const handleClick = () => {
    onPlay(audio, id);
  };

  return (
    <div className="flex items-center justify-between group">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-gray-500 text-sm">{artist}</p>
      </div>
      <button
        onClick={handleClick}
        className="text-gray-600 group-hover:text-purple-600"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
};

export default SongCard;
