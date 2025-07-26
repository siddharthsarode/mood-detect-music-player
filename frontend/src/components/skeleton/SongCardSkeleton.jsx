const SongCardSkeleton = () => {
  return (
    <div className="flex items-center justify-between animate-pulse py-2">
      <div className="flex flex-col gap-1">
        <div className="h-4 w-40 bg-gray-300 rounded" />
        <div className="h-3 w-24 bg-gray-200 rounded" />
      </div>

      {/* Play/Pause Button Placeholder */}
      <div className="h-5 w-5 bg-gray-300 rounded-full" />
    </div>
  );
};

export default SongCardSkeleton;
