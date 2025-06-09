import { Play } from "lucide-react";
import { Video } from "@/types";

interface VideoGalleryProps {
  videos: Video[];
  className?: string;
}

const VideoGallery = ({ videos, className = '' }: VideoGalleryProps) => {
  if (videos.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <h4 className="font-semibold mb-3 flex items-center gap-2">
        <Play className="h-4 w-4" />
        Related Work ({videos.length})
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map(video => (
          <div key={video.id} className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden bg-muted">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <Play className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="mt-2">
              <h5 className="font-medium text-sm">{video.title}</h5>
              {video.description && (
                <p className="text-xs text-muted-foreground mt-1">{video.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;