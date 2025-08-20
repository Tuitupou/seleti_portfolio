import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when clicking outside or on escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        const handleClickOutside = (e) => {
            if (isMenuOpen && !e.target.closest('.mobile-menu-container')) {
                setIsMenuOpen(false);
            }
        };

        const handleKeyDown = (e) => {
            if (!isMenuOpen) return;
            
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            } else if (e.key === 'Tab') {
                // Handle tab navigation within menu
                const menuItems = document.querySelectorAll('#mobile-menu [role="menuitem"]');
                const firstItem = menuItems[0];
                const lastItem = menuItems[menuItems.length - 1];
                
                if (e.shiftKey && document.activeElement === firstItem) {
                    e.preventDefault();
                    lastItem.focus();
                } else if (!e.shiftKey && document.activeElement === lastItem) {
                    e.preventDefault();
                    firstItem.focus();
                }
            }
        };

        if (isMenuOpen) {
            document.addEventListener('keydown', handleEscape);
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('click', handleClickOutside);
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Track active section
    useEffect(() => {
        const sections = navItems.map(item => item.href.substring(1));
        
        const handleScroll = () => {
            const scrollPos = window.scrollY + 100;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPos) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setIsMenuOpen(false);
        // Smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMobileMenu = () => {
        const newMenuState = !isMenuOpen;
        setIsMenuOpen(newMenuState);
        
        // Focus management
        if (newMenuState) {
            // Focus first menu item when menu opens
            setTimeout(() => {
                const firstMenuItem = document.querySelector('#mobile-menu [role="menuitem"]');
                if (firstMenuItem) {
                    firstMenuItem.focus();
                }
            }, 100);
        }
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed w-full z-50 transition-all duration-300",
                    isScrolled ? "py-3 bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "py-5"
                )}
            >
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <a
                        className="text-xl font-bold text-primary flex items-center min-h-[44px] min-w-[44px] justify-center"
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#hero');
                        }}
                    >
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Seleti Tuitupou</span>{" "}
                            <span className="hidden sm:inline">Portfolio</span>
                            <span className="sm:hidden">ST</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => {
                            const sectionId = item.href.substring(1);
                            const isActive = activeSection === sectionId;
                            
                            return (
                                <a
                                    key={index}
                                    href={item.href}
                                    className={cn(
                                        "relative px-3 py-2 transition-all duration-300 min-h-[44px] flex items-center",
                                        isActive 
                                            ? "text-primary" 
                                            : "text-foreground/80 hover:text-primary"
                                    )}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                >
                                    {item.name}
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className={cn(
                            "mobile-menu-button md:hidden p-3 text-foreground relative",
                            "min-h-[48px] min-w-[48px] flex items-center justify-center",
                            "rounded-lg hover:bg-muted/50 transition-colors duration-200",
                            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                            "touch-manipulation"
                        )}
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        type="button"
                    >
                        <div className="relative w-6 h-6">
                            <Menu 
                                className={cn(
                                    "absolute inset-0 transition-all duration-300",
                                    isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                                )}
                                size={24} 
                                aria-hidden="true"
                            />
                            <X 
                                className={cn(
                                    "absolute inset-0 transition-all duration-300",
                                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
                                )}
                                size={24} 
                                aria-hidden="true"
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div 
                id="mobile-menu"
                className={cn(
                    "mobile-menu-overlay fixed inset-0 md:hidden transition-all duration-300",
                    isMenuOpen 
                        ? "opacity-100 pointer-events-auto" 
                        : "opacity-0 pointer-events-none"
                )}
            >
                {/* Backdrop */}
                <div 
                    className={cn(
                        "absolute inset-0 bg-background/95 backdrop-blur-md",
                        "transition-opacity duration-300",
                        isMenuOpen ? "opacity-100" : "opacity-0"
                    )}
                />
                
                {/* Menu Content */}
                <div 
                    className={cn(
                        "mobile-menu-container relative z-50 flex flex-col justify-center items-center h-full",
                        "transition-transform duration-300 ease-out",
                        isMenuOpen ? "translate-y-0" : "-translate-y-8"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-center">
                        {navItems.map((item, index) => {
                            const sectionId = item.href.substring(1);
                            const isActive = activeSection === sectionId;
                            
                            return (
                                <a
                                    key={index}
                                    href={item.href}
                                    className={cn(
                                        "relative text-2xl font-medium transition-all duration-300",
                                        "min-h-[56px] px-6 py-3 flex items-center justify-center rounded-lg",
                                        "transform hover:scale-105 focus:scale-105",
                                        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                        "touch-manipulation",
                                        isActive 
                                            ? "text-primary bg-primary/10" 
                                            : "text-foreground/90 hover:text-primary hover:bg-muted/50",
                                        // Stagger animation delays
                                        isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                                    )}
                                    style={{
                                        transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                                    }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    role="menuitem"
                                    tabIndex={isMenuOpen ? 0 : -1}
                                >
                                    {item.name}
                                    {isActive && (
                                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-primary rounded-full" />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Contact Info in Mobile Menu */}
                    <div 
                        className={cn(
                            "mt-12 text-center transition-all duration-500",
                            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        )}
                        style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
                    >
                        <p className="text-muted-foreground text-sm mb-4">
                            Ready to work together?
                        </p>
                        <div className="flex flex-col space-y-3">
                            <a
                                href="mailto:ss.tuitupou@gmail.com"
                                className={cn(
                                    "px-6 py-3 bg-primary text-primary-foreground rounded-lg",
                                    "min-h-[48px] flex items-center justify-center",
                                    "hover:bg-primary/90 transition-colors duration-200",
                                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                )}
                            >
                                Email Me
                            </a>
                            <a
                                href="tel:+12674231907"
                                className={cn(
                                    "px-6 py-3 border border-primary text-primary rounded-lg",
                                    "min-h-[48px] flex items-center justify-center",
                                    "hover:bg-primary/10 transition-colors duration-200",
                                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                )}
                            >
                                Call Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};