import { Button } from "@/components/ui/button";
import { Instagram, Youtube } from "lucide-react";

const BellaNinaVerse = () => {
    return (
        <div className="pt-24 min-h-screen bg-background container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                    WELCOME TO THE #BELLAVERSE
                </h1>
                <p className="text-xl text-white/60 mb-12 leading-relaxed">
                    The #BELLAVERSE is more than just a fan club. It's a community of dreamers, creators, and music lovers connected by the sounds of Bella Nina.
                    Join us for exclusive content, virtual meetups, and a front-row seat to the future of music.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-[#E1306C]/20 flex items-center justify-center mx-auto mb-6">
                            <Instagram className="w-8 h-8 text-[#E1306C]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Instagram</h3>
                        <p className="text-white/60 mb-6">Follow for daily updates, stories, and lifestyle content.</p>
                        <Button asChild className="rounded-full bg-[#E1306C] hover:bg-[#E1306C]/90 w-full">
                            <a href="https://instagram.com/iam.bellanina" target="_blank" rel="noreferrer">
                                Follow
                            </a>
                        </Button>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-[#FF0000]/20 flex items-center justify-center mx-auto mb-6">
                            <Youtube className="w-8 h-8 text-[#FF0000]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">YouTube</h3>
                        <p className="text-white/60 mb-6">Subscribe for official music videos, vlogs, and live streams.</p>
                        <Button asChild className="rounded-full bg-[#FF0000] hover:bg-[#FF0000]/90 w-full">
                            <a href="https://www.youtube.com/@iam.BellaNina" target="_blank" rel="noreferrer">
                                Subscribe
                            </a>
                        </Button>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-[#00f2ea]/20 flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-[#00f2ea] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.12-.01.25-.01.5-.01.75.04 4.66-2.14 9.07-6.09 11.25-3.93 2.18-8.83 1.55-12.16-1.55C-1.6 15.36-.65 10.18 3.83 7.7c1.63-.9 3.51-1.27 5.38-1.06V10.7c-1.52-.47-3.25.06-4.18 1.37-.94 1.31-.78 3.13.38 4.26 1.17 1.14 3.07 1.28 4.41.33 1.35-.96 2.07-2.64 1.83-4.28 0-.77.01-1.53 0-2.3.01-3.34.01-6.68 0-10.02.3-.03.6-.05.89-.08z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">TikTok</h3>
                        <p className="text-white/60 mb-6">Join the fun with dance challenges and viral moments.</p>
                        <Button asChild className="rounded-full bg-[#00f2ea] hover:bg-[#00f2ea]/90 text-black w-full">
                            <a href="https://tiktok.com/@iambellanina" target="_blank" rel="noreferrer">
                                Follow
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BellaNinaVerse;
