import { Mail, MapPin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer id="contact" className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tighter text-white">VIBE STREAM</h3>
                        <p className="text-white/60 max-w-xs">
                            Innovating the future of music and artist connection. Join the movement.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Reach Us</h4>
                        <div className="space-y-3">
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
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                        <div className="flex space-x-4">
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
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
                    <p>&copy; 2025 Vibe Stream Records. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
