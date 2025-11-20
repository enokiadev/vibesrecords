import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

const videos = [
    {
        title: "Tick Tock",
        artist: "Bella Nina",
        type: "Visualizer",
        thumbnail: "https://img.youtube.com/vi/qJjrE027N2M/maxresdefault.jpg",
        link: "https://youtu.be/qJjrE027N2M?si=aU9ny9k2s9ztXdO1"
    },
    {
        title: "Limitless",
        artist: "Bella Nina",
        type: "Visualizer",
        thumbnail: "https://img.youtube.com/vi/61KyxoRno1Q/maxresdefault.jpg",
        link: "https://youtu.be/61KyxoRno1Q?si=UfUKnv31yTnW8Hqx"
    },
    {
        title: "Bubble Gum",
        artist: "Bella Nina",
        type: "Visualizer",
        thumbnail: "https://img.youtube.com/vi/92NtDw11i3Q/maxresdefault.jpg",
        link: "https://youtu.be/92NtDw11i3Q?si=U7EtW_vxtvYHDOeP"
    },
    {
        title: "Thank God",
        artist: "Bella Nina",
        type: "Visualizer",
        thumbnail: "https://img.youtube.com/vi/hMh_VWfglpQ/maxresdefault.jpg",
        link: "https://youtu.be/hMh_VWfglpQ?si=id5_H3bqxNYimfEY"
    },
    {
        title: "Thank God (Audio)",
        artist: "Bella Nina",
        type: "Audio",
        thumbnail: "https://img.youtube.com/vi/_bI-R_yQlVE/maxresdefault.jpg",
        link: "https://youtu.be/_bI-R_yQlVE?si=2A2kE0brlAm43NBq"
    }
];

const filterOptions = ["All", "Music Video", "Visualizer", "Lyrics Video", "Audio"];

const BellaNinaVideo = () => {
    const [filter, setFilter] = useState("All");

    const filteredVideos = filter === "All"
        ? videos
        : videos.filter(v => v.type === filter || (filter === "Audio" && v.type === "Audio"));

    return (
        <div className="pt-24 min-h-screen bg-background container mx-auto px-4">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">BELLA NINA VIDEOS</h1>
                <p className="text-xl text-white/60">Watch official music videos, visualizers, and more.</p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {filterOptions.map((option) => (
                    <Button
                        key={option}
                        variant={filter === option ? "default" : "outline"}
                        onClick={() => setFilter(option)}
                        className={cn(
                            "rounded-full",
                            filter === option ? "bg-primary hover:bg-primary/90" : "border-white/20 text-white hover:bg-white/10"
                        )}
                    >
                        {option}
                    </Button>
                ))}
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos.map((video, index) => (
                    <div key={index} className="group relative bg-card border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                        <div className="aspect-video relative">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <a
                                    href={video.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform"
                                >
                                    <Play className="w-8 h-8 fill-current ml-1" />
                                </a>
                            </div>
                            <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 rounded text-xs font-medium text-white">
                                {video.type}
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-white mb-1">{video.title}</h3>
                            <p className="text-white/60 text-sm">{video.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BellaNinaVideo;
