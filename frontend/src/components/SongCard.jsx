import { Pause, Play } from "lucide-react";

const SongCard = ({ id, title, artist, audio, isPlaying, onPlay }) => {
  const handleClick = () => {
    onPlay(audio, id);
  };

  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-5">
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-gray-500 text-sm">{artist}</p>
        </div>

        {isPlaying && (
          <div className="flex items-end gap-[2px] ml-2 h-4">
            <div className="w-[2px] h-full bg-purple-600 origin-bottom animate-[wave_1s_ease-in-out_infinite] [animation-delay:-0.4s]" />
            <div className="w-[2px] h-full bg-purple-600 origin-bottom animate-[wave_1s_ease-in-out_infinite] [animation-delay:-0.2s]" />
            <div className="w-[2px] h-full bg-purple-600 origin-bottom animate-[wave_1s_ease-in-out_infinite] [animation-delay:0s]" />
            <div className="w-[2px] h-full bg-purple-600 origin-bottom animate-[wave_1s_ease-in-out_infinite] [animation-delay:0.2s]" />
          </div>
        )}
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
