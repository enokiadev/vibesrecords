import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        {
            name: "Bella Nina",
            path: "/bella-nina",
            dropdown: [
                { name: "Music", path: "/bella-nina/music" },
                { name: "Video", path: "/bella-nina/video" },
                { name: "#BELLAVERSE", path: "/bella-nina/bellaverse" },
            ]
        },
        { name: "Music", path: "/music" },
        { name: "Videos", path: "/videos" },
        { name: "Reach Us", path: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-background/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="h-10 w-10 rounded-full border border-white/10 group-hover:border-primary/50 transition-colors overflow-hidden shrink-0">
                            <img
                                src="https://vibestream.lovable.app/assets/vibe-logo-B5km9LKB.jpeg"
                                alt="Vibe Stream Records"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold font-display tracking-tighter text-white group-hover:text-primary transition-colors">
                            VIBES.RECORDS
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.dropdown ? (
                                    <div
                                        className="flex items-center cursor-pointer text-sm font-medium text-white/80 hover:text-primary transition-colors"
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        <Link to={link.path}>{link.name}</Link>
                                        <ChevronDown className="ml-1 h-4 w-4" />

                                        {/* Dropdown Menu */}
                                        <div className={cn(
                                            "absolute top-full left-0 pt-2 w-48 transition-all duration-200 origin-top-left",
                                            isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                                        )}>
                                            <div className="bg-card border border-white/10 rounded-md shadow-lg overflow-hidden">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.path}
                                                        className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-primary"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Social Icons (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://www.youtube.com/@iam.BellaNina" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#FF0000] transition-colors">
                            <Youtube className="h-5 w-5" />
                        </a>
                        <a href="https://tiktok.com/@iambellanina" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#00f2ea] transition-colors">
                            {/* TikTok Icon */}
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com/iam.bellanina" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#E1306C] transition-colors">
                            <Instagram className="h-5 w-5" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-white/10 animate-accordion-down h-screen">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.dropdown ? (
                                    <>
                                        <div className="px-3 py-2 text-base font-medium text-white/80">
                                            {link.name}
                                        </div>
                                        <div className="pl-6 space-y-1">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    className="block px-3 py-2 text-sm font-medium text-white/60 hover:text-primary transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="block px-3 py-2 text-base font-medium text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Mobile Socials */}
                        <div className="flex items-center space-x-6 px-3 py-4 mt-4 border-t border-white/10">
                            <a href="https://www.youtube.com/@iam.BellaNina" className="text-white/60 hover:text-white">
                                <Youtube className="h-6 w-6" />
                            </a>
                            <a href="https://tiktok.com/@iambellanina" className="text-white/60 hover:text-white">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com/iam.bellanina" className="text-white/60 hover:text-white">
                                <Instagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
