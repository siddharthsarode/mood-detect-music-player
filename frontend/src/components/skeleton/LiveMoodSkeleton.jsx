const LiveMoodSkeleton = () => {
  return (
    <div className="flex space-x-8 animate-pulse">
      <div className="rounded-md bg-gray-300 w-[320px] h-72" />

      {/* Text Content Skeleton */}
      <div className="space-y-3 flex-1">
        {/* Title */}
        <div className="h-6 w-1/2 bg-gray-300 rounded" />
        {/* Paragraph lines */}
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-3/4 bg-gray-200 rounded" />
        {/* Button */}
        <div className="mt-4 h-10 w-36 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default LiveMoodSkeleton;
