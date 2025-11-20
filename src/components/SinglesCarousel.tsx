import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const singles = [
    {
        title: "Tick Tock",
        artist: "Bella Nina",
        image: "https://img.youtube.com/vi/qJjrE027N2M/maxresdefault.jpg",
        link: "https://sndo.ffm.to/zljaokz"
    },
    {
        title: "Bubble Gum",
        artist: "Bella Nina",
        image: "https://img.youtube.com/vi/92NtDw11i3Q/maxresdefault.jpg",
        link: "https://sndo.ffm.to/pvdbkew"
    },
    {
        title: "Limitless",
        artist: "Bella Nina",
        image: "https://img.youtube.com/vi/61KyxoRno1Q/maxresdefault.jpg",
        link: "https://youtu.be/61KyxoRno1Q?si=UfUKnv31yTnW8Hqx"
    },
    {
        title: "Thank God",
        artist: "Bella Nina",
        image: "https://img.youtube.com/vi/hMh_VWfglpQ/maxresdefault.jpg",
        link: "https://youtu.be/hMh_VWfglpQ?si=id5_H3bqxNYimfEY"
    }
];

const SinglesCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tighter">
                    LATEST SINGLES
                </h2>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {singles.map((single, index) => (
                            <div key={index} className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pl-4">
                                <div className="group relative">
                                    {/* Vinyl + Album Cover */}
                                    <div className="relative w-full aspect-square">
                                        {/* Vinyl Record */}
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[75%] h-[75%] rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl transition-transform duration-500 group-hover:translate-x-[5%]">
                                            {/* Vinyl grooves effect */}
                                            <div className="absolute inset-0 rounded-full" style={{
                                                background: `repeating-radial-gradient(circle at center, 
                                                    transparent 0px, 
                                                    transparent 2px, 
                                                    rgba(255,255,255,0.03) 2px, 
                                                    rgba(255,255,255,0.03) 4px)`
                                            }} />
                                            {/* Center label */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-gradient-to-br from-primary via-primary/70 to-primary/50 flex items-center justify-center shadow-xl border-2 border-white/10">
                                                <div className="w-5 h-5 rounded-full bg-black shadow-inner" />
                                            </div>
                                        </div>

                                        {/* Album Cover */}
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-lg overflow-hidden shadow-2xl border-4 border-white/10 bg-card z-10 transition-transform duration-500 group-hover:-translate-x-2">
                                            <img
                                                src={single.image}
                                                alt={single.title}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Glossy overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />

                                            {/* Overlay Content */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {/* Gradient background for soft edges */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />
                                                <div className="relative z-10 flex flex-col items-center">
                                                    <h3 className="text-2xl font-bold text-white mb-2 px-4 text-center">{single.title}</h3>
                                                    <p className="text-primary font-medium mb-6">{single.artist}</p>
                                                    <Button asChild className="rounded-full">
                                                        <a href={single.link} target="_blank" rel="noreferrer">
                                                            <Play className="mr-2 h-4 w-4 fill-current" />
                                                            Stream Now
                                                        </a>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SinglesCarousel;
