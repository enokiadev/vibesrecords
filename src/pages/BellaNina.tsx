import { Button } from "@/components/ui/button";
import { Play, Instagram, Youtube } from "lucide-react";

const BellaNina = () => {
    return (
        <div className="pt-20 min-h-screen bg-background">
            {/* Artist Hero */}
            <section className="relative h-[60vh] flex items-end pb-12 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <iframe
                        className="w-full h-full object-cover scale-150 pointer-events-none"
                        src="https://www.youtube.com/embed/qJjrE027N2M?autoplay=1&mute=1&controls=0&loop=1&playlist=qJjrE027N2M&playsinline=1"
                        title="Bella Nina Visualizer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{ pointerEvents: 'none' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-20" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter">
                        BELLA NINA
                    </h1>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                            <a href="/bella-nina/music">
                                <Play className="mr-2 h-4 w-4 fill-current" />
                                Latest Release
                            </a>
                        </Button>
                        <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md">
                            <a href="/bella-nina/bellaverse">
                                Join #BELLAVERSE
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Bio Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Welcome to the BELLAVERSE</h2>
                        <div className="space-y-4 text-lg text-white/70 leading-relaxed">
                            <p>
                                I’m Bella Nina, an American Latin multi-genre pop artist blending pop, R&B, reggaeton, and dance to create music that inspires and connects.
                            </p>
                            <p>
                                <strong>New Music Every Week!</strong><br />
                                Join me on my mission to virtually touch a billion hearts through sound, visuals, and emotion. Expect music videos, visualizers, behind-the-scenes clips, and exclusive drops every Tuesday and Friday.
                            </p>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a href="https://tiktok.com/@iambellanina" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com/iam.bellanina" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="https://www.youtube.com/@iam.BellaNina" target="_blank" rel="noreferrer" className="text-white/60 hover:text-primary transition-colors">
                                <Youtube className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                        <img
                            src="/assets/bella-bio.jpg"
                            alt="Bella Nina Portrait"
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>
                </div>
            </section>

            {/* Latest Releases */}
            <section id="music" className="py-20 bg-black/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12">Latest Releases</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Release 1 */}
                        <div className="bg-card border border-white/10 rounded-xl p-6 flex flex-col md:flex-row gap-6 hover:bg-white/5 transition-colors">
                            <div className="w-full md:w-48 aspect-square rounded-lg overflow-hidden bg-white/10 shrink-0">
                                <img
                                    src="https://img.youtube.com/vi/qJjrE027N2M/maxresdefault.jpg"
                                    alt="Tick Tock"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-2">Tick Tock</h3>
                                <p className="text-primary mb-4">Visualizer Out Now</p>
                                <Button asChild size="sm" className="rounded-full">
                                    <a href="https://sndo.ffm.to/zljaokz" target="_blank" rel="noreferrer">
                                        <Play className="mr-2 h-4 w-4 fill-current" />
                                        Listen
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Release 2 */}
                        <div className="bg-card border border-white/10 rounded-xl p-6 flex flex-col md:flex-row gap-6 hover:bg-white/5 transition-colors">
                            <div className="w-full md:w-48 aspect-square rounded-lg overflow-hidden bg-white/10 shrink-0">
                                <img
                                    src="https://img.youtube.com/vi/92NtDw11i3Q/maxresdefault.jpg"
                                    alt="Bubble Gum"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-2">Bubble Gum</h3>
                                <p className="text-primary mb-4">Visualizer Out Now</p>
                                <Button asChild size="sm" className="rounded-full">
                                    <a href="https://sndo.ffm.to/pvdbkew" target="_blank" rel="noreferrer">
                                        <Play className="mr-2 h-4 w-4 fill-current" />
                                        Listen
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Videos Section */}
            <section id="video" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12">Featured Videos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group relative bg-card border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                            <div className="aspect-video relative">
                                <img
                                    src="https://img.youtube.com/vi/qJjrE027N2M/maxresdefault.jpg"
                                    alt="Tick Tock"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a
                                        href="https://youtu.be/qJjrE027N2M?si=aU9ny9k2s9ztXdO1"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform"
                                    >
                                        <Play className="w-8 h-8 fill-current ml-1" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-white mb-1">Tick Tock</h3>
                                <p className="text-white/60 text-sm">Visualizer</p>
                            </div>
                        </div>
                        <div className="group relative bg-card border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                            <div className="aspect-video relative">
                                <img
                                    src="https://img.youtube.com/vi/61KyxoRno1Q/maxresdefault.jpg"
                                    alt="Limitless"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a
                                        href="https://youtu.be/61KyxoRno1Q?si=UfUKnv31yTnW8Hqx"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform"
                                    >
                                        <Play className="w-8 h-8 fill-current ml-1" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-white mb-1">Limitless</h3>
                                <p className="text-white/60 text-sm">Visualizer</p>
                            </div>
                        </div>
                        <div className="group relative bg-card border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                            <div className="aspect-video relative">
                                <img
                                    src="https://img.youtube.com/vi/92NtDw11i3Q/maxresdefault.jpg"
                                    alt="Bubble Gum"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a
                                        href="https://youtu.be/92NtDw11i3Q?si=U7EtW_vxtvYHDOeP"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform"
                                    >
                                        <Play className="w-8 h-8 fill-current ml-1" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-white mb-1">Bubble Gum</h3>
                                <p className="text-white/60 text-sm">Visualizer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* #BELLAVERSE Section */}
            <section id="bellaverse" className="py-20 bg-black/50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
                        JOIN THE #BELLAVERSE
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
                        Connect with Bella Nina and other fans. Get exclusive access to behind-the-scenes content, early releases, and virtual events.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Button asChild size="lg" className="rounded-full bg-[#E1306C] hover:bg-[#E1306C]/90">
                            <a href="https://instagram.com/iam.bellanina" target="_blank" rel="noreferrer">
                                <Instagram className="mr-2 h-5 w-5" />
                                Follow on Instagram
                            </a>
                        </Button>
                        <Button asChild size="lg" className="rounded-full bg-[#FF0000] hover:bg-[#FF0000]/90">
                            <a href="https://www.youtube.com/@iam.BellaNina" target="_blank" rel="noreferrer">
                                <Youtube className="mr-2 h-5 w-5" />
                                Subscribe on YouTube
                            </a>
                        </Button>
                        <Button asChild size="lg" className="rounded-full bg-[#00f2ea] hover:bg-[#00f2ea]/90 text-black">
                            <a href="https://tiktok.com/@iambellanina" target="_blank" rel="noreferrer">
                                {/* TikTok Icon */}
                                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                                Follow on TikTok
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Credits */}
            <section className="py-12 container mx-auto px-4 text-center text-white/40 text-sm">
                <p>Song Written by: Enokia (EYO). Visualized by DAF & Bella Nina performing Artist. Produced by Vibe Stream Records © 2025</p>
            </section>
        </div>
    );
};

export default BellaNina;
