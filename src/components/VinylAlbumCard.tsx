import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface VinylAlbumCardProps {
    title: string;
    artist: string;
    year: string;
    image: string;
    streamLink: string;
}

const VinylAlbumCard = ({ title, artist, year, image, streamLink }: VinylAlbumCardProps) => {
    return (
        <div className="group relative bg-card border border-white/10 rounded-xl p-6 hover:bg-white/5 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Vinyl + Album Cover */}
                <div className="relative w-64 h-64 shrink-0">
                    {/* Vinyl Record */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl transition-transform duration-500 group-hover:translate-x-8">
                        {/* Vinyl grooves effect */}
                        <div className="absolute inset-0 rounded-full" style={{
                            background: `repeating-radial-gradient(circle at center, 
                                transparent 0px, 
                                transparent 2px, 
                                rgba(255,255,255,0.03) 2px, 
                                rgba(255,255,255,0.03) 4px)`
                        }} />
                        {/* Center label */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-primary via-primary/70 to-primary/50 flex items-center justify-center shadow-xl border-2 border-white/10">
                            <div className="w-3 h-3 rounded-full bg-black shadow-inner" />
                        </div>
                    </div>

                    {/* Album Cover */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-56 h-56 rounded-lg overflow-hidden shadow-2xl border-4 border-white/10 bg-card z-10 transition-transform duration-500 group-hover:-translate-x-2">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                        {/* Glossy overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />
                    </div>
                </div>

                {/* Track Info */}
                <div className="flex-grow text-center md:text-left">
                    <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-lg text-white/60 mb-1">{artist}</p>
                    <p className="text-sm text-white/40">{year}</p>
                </div>

                {/* Stream Button */}
                <Button asChild size="lg" className="rounded-full shrink-0">
                    <a href={streamLink} target="_blank" rel="noreferrer">
                        <Play className="mr-2 h-5 w-5 fill-current" />
                        Stream Now
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default VinylAlbumCard;
