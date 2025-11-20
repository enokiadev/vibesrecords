import { Mail, MapPin, Instagram, Youtube } from "lucide-react";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const isArtistPage = location.pathname.startsWith('/bella-nina');

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
                            <a href={`mailto:${isArtistPage ? "bella.vibestream.in@gmail.com" : "vibestream.in@gmail.com"}`} className="flex items-center text-white/60 hover:text-primary transition-colors">
                                <Mail className="h-5 w-5 mr-3" />
                                {isArtistPage ? "bella.vibestream.in@gmail.com" : "vibestream.in@gmail.com"}
                            </a>
                            {!isArtistPage && (
                                <div className="flex items-start text-white/60">
                                    <MapPin className="h-5 w-5 mr-3 mt-1 shrink-0" />
                                    <span>
                                        2298, 1007 N Orange St. 4th Floor<br />
                                        Wilmington, DE 19801<br />
                                        United States
                                    </span>
                                </div>
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
                                    {/* Apple Music */}
                                    <a href="https://music.apple.com/us/artist/bella-nina/1553663936" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-[#FA243C] hover:bg-white/10 transition-all">
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.57-.84 1.58.12 2.8.91 3.48 1.97-3.17 1.68-2.6 6.09.62 7.28-.32 1.92-1.08 3.81-2.75 3.82zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                        </svg>
                                    </a>
                                    {/* Amazon Music */}
                                    <a href="https://music.amazon.com/artists/B08WJ3X4X5/bella-nina" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-[#00A8E1] hover:bg-white/10 transition-all">
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.579 9.533c-0.23-1.399-1.54-2.1-2.699-2.1-1.33 0-2.16.799-2.16 2.169 0 1.27.88 2.079 2.199 2.079 1.22 0 2.33-.599 2.66-2.149zm1.84 5.299c-0.58.499-1.4.799-2.3.799-1.799 0-3.099-1.199-3.099-3.499 0-2.6 1.6-4.2 4.199-4.2 1.1 0 2.1.399 2.7 1.199l0.1-0.899h2.199v8.599c0 2.7-2 4.3-4.799 4.3-2.3 0-4.1-1.3-4.5-3.199l1.999-0.5c0.3 1 1.2 1.699 2.5 1.699 1.399 0 2.399-.899 2.399-2.5v-0.899c-0.599.699-1.699 1.1-2.799 1.1-2.6 0-4.5-2-4.5-4.699 0-2.6 1.9-4.699 4.5-4.699 1.199 0 2.3.5 3 1.199v-1.499h-1.5v-1.399h3.699v8.599h-2.199v-0.899zm-12.6 3.8c2.3 1.699 6.5 2.699 10.599 2.3 3.199-.3 5.699-1.6 7.399-3.1.3-.3.3-.699 0-1-.3-.3-.699-.3-1 0-1.499 1.3-3.699 2.4-6.599 2.699-3.599.3-7.299-.5-9.399-2-.399-.3-.899-.2-1.199.2-0.3.399-.2.899.2 1.199z" />
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
