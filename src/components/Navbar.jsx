import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const handleScroll = useCallback(() => {
        const scrolled = window.scrollY > 50;
        if (scrolled !== isScrolled) {
            setIsScrolled(scrolled);
        }
    }, [isScrolled]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Expertise", href: "#expertise" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            onKeyDown={(e) => { if (e.key === 'Escape') setIsSheetOpen(false); }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(2,6,23,0.15)] border-b border-slate-200 py-4" 
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                    Tushar Nikumbh
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-10 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-semibold text-slate-700 hover:text-slate-900 transition-colors hover:underline underline-offset-8 decoration-2 decoration-slate-900"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="/CV/Profile%20(1).pdf" target="_blank" rel="noopener noreferrer" className="ml-6">
                        <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-6 py-3 text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200 active:scale-95">
                             Download CV
                        </Button>
                    </a>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label={isSheetOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isSheetOpen}
                                aria-controls="mobile-menu"
                                className="text-slate-800 hover:bg-slate-100 pr-[2px]"
                            >
                                {isSheetOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </SheetTrigger>
                        <SheetContent id="mobile-menu" side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col gap-4 mt-8 px-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsSheetOpen(false)}
                                        className="text-lg font-medium text-slate-800 hover:text-slate-950 transition-colors py-3 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="pt-6 border-t border-slate-200 mt-2 space-y-3">
                                    <a href="/CV/Profile%20(1).pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsSheetOpen(false)}>
                                        <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-lg transition-all py-3">
                                            Download CV
                                        </Button>
                                    </a>
                                    
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
