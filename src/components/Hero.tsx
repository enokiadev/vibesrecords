import { Button } from "@/components/ui/button";
import { Play, Globe } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
                <iframe
                    className="w-full h-full object-cover scale-150 pointer-events-none"
                    src="https://www.youtube.com/embed/qJjrE027N2M?autoplay=1&mute=1&controls=0&loop=1&playlist=qJjrE027N2M&playsinline=1"
                    title="Bella Nina Visualizer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    style={{ pointerEvents: 'none' }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 text-center">
                <div className="animate-fade-in space-y-8">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white tracking-wide">
                        VIBE STREAM RECORDS PRESENTS
                    </span>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none">
                        BELLA<br />NINA
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light tracking-wide">
                        American Latin Multi-Genre Pop Artist
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Button asChild size="lg" className="w-full sm:w-auto text-lg h-14 px-10 shadow-[0_0_40px_-10px_rgba(217,70,239,0.6)]">
                            <a href="/music">
                                <Play className="mr-2 h-5 w-5 fill-current" />
                                Listen Now
                            </a>
                        </Button>

                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-10 rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-105">
                            <a href="/bella-nina/bellaverse">
                                <Globe className="mr-2 h-5 w-5" />
                                Explore #BELLAVERSE
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
