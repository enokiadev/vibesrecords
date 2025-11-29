import { Mail, MapPin, Instagram, Youtube } from "lucide-react";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const isArtistPage = location.pathname.startsWith('/bella-nina') || window.location.hostname.includes('bellanina');

    return (
        <footer id="contact" className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tighter text-white">
                            {isArtistPage ? "BELLA NINA" : "VIBE STREAM"}
                        </h3>
                        <p className="text-white/60 max-w-xs">
                            {isArtistPage
                                ? "Join the #BELLAVERSE. Music, visuals, and emotion."
                                : "Innovating the future of music and artist connection. Join the movement."}
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Reach Us</h4>
                        <div className="space-y-3">
                            {isArtistPage ? (
                                <div className="space-y-2 text-white/60">
                                    <p className="font-medium text-white">Bella Nina Artist Management:</p>
                                    <p>Vibe Stream Records</p>
                                    <a href="mailto:vibestream.in@gmail.com" className="flex items-center hover:text-primary transition-colors">
                                        <Mail className="h-4 w-4 mr-2" />
                                        vibestream.in@gmail.com
                                    </a>
                                    <a href="tel:+15166191450" className="flex items-center hover:text-primary transition-colors">
                                        <span className="mr-2">📞</span>
                                        +1 (516) 619-1450
                                    </a>
                                </div>
                            ) : (
                                <>
                                    <a href="mailto:vibestream.in@gmail.com" className="flex items-center text-white/60 hover:text-primary transition-colors">
                                        <Mail className="h-5 w-5 mr-3" />
                                        vibestream.in@gmail.com
                                    </a>
                                    <div className="flex items-start text-white/60">
                                        <MapPin className="h-5 w-5 mr-3 mt-1 shrink-0" />
                                        <span>
                                            2298, 1007 N Orange St. 4th Floor<br />
                                            Wilmington, DE 19801<br />
                                            United States
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://www.youtube.com/@iam.BellaNina" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all">
                                <Youtube className="h-5 w-5" />
                            </a>
                            <a href="https://tiktok.com/@iambellanina" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com/iam.bellanina" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all">
                                <Instagram className="h-5 w-5" />
                            </a>

                            {isArtistPage && (
                                <>
                                    {/* Spotify */}
                                    <a href="https://open.spotify.com/artist/5vBSrE1xjwDls1S73K39eI" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-[#1DB954] hover:bg-white/10 transition-all">
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                        </svg>
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
                    {isArtistPage ? (
                        <p>Song Written by: Enokia (EYO). Visualized by DAF & Bella Nina performing Artist. Produced by Vibe Stream Records © 2025</p>
                    ) : (
                        <p>&copy; 2025 Vibe Stream Records. All rights reserved.</p>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
