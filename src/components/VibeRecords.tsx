import { Mic2, Cpu, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const VibeRecords = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-black to-black pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                        VIBE RECORDS
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        The future of music is here. Bridging the gap between human creativity and artificial intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Real Artist */}
                    <div className="group relative p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                                <Mic2 className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Real Artists</h3>
                            <p className="text-white/60 mb-6 leading-relaxed">
                                Empowering talented musicians with cutting-edge tools and global reach. We nurture authentic voices and help them connect with fans worldwide.
                            </p>
                            <ul className="space-y-3 text-white/80">
                                <li className="flex items-center">
                                    <Music className="w-4 h-4 mr-2 text-primary" />
                                    Global Distribution
                                </li>
                                <li className="flex items-center">
                                    <Music className="w-4 h-4 mr-2 text-primary" />
                                    Artist Development
                                </li>
                                <li className="flex items-center">
                                    <Music className="w-4 h-4 mr-2 text-primary" />
                                    Creative Freedom
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* AI Artist */}
                    <div className="group relative p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                                <Cpu className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">AI Artists</h3>
                            <p className="text-white/60 mb-6 leading-relaxed">
                                Pioneering the next generation of virtual performers. Our AI artists push the boundaries of creativity, offering unique sonic experiences.
                            </p>
                            <ul className="space-y-3 text-white/80">
                                <li className="flex items-center">
                                    <Music className="w-4 h-4 mr-2 text-blue-500" />
                                    Virtual Performances
                                </li>
                                <li className="flex items-center">
                                    <Music className="w-4 h-4 mr-2 text-blue-500" />
                                    Infinite Creativity
                                </li>
                                <li className="flex items-center">
                                    <Music className="w-4 h-4 mr-2 text-blue-500" />
                                    24/7 Engagement
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Streaming Platform CTA */}
                <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/20 to-blue-600/20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />
                    <div className="relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="h-20 w-20 rounded-full border-2 border-white/20 overflow-hidden">
                                <img
                                    src="https://vibestream.lovable.app/assets/vibe-logo-B5km9LKB.jpeg"
                                    alt="Vibe Stream Records"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Vibes Streaming Platform
                        </h3>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                            Connect through track-based chat on our AI music discovery and streaming platform.
                        </p>
                        <Button asChild size="lg" className="rounded-full text-lg px-8 bg-white text-black hover:bg-white/90">
                            <a href="https://vibestream.in/" target="_blank" rel="noreferrer">
                                Launch App
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VibeRecords;
