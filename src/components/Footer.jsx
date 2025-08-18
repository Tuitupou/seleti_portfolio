import { ArrowUp, Mail, Phone, Github, Linkedin } from "lucide-react";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-8 sm:py-12 px-4 bg-card relative border-t border-border">
            <div className="container mx-auto max-w-5xl">
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                    
                    {/* Brand & Copyright */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-xl font-bold text-primary mb-2">
                            Seleti Tuitupou
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} Tuitupou Tech. All rights reserved.
                        </p>
                    </div>

                    {/* Quick Links - Mobile */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 lg:hidden">
                        <div className="flex gap-4">
                            <a
                                href="mailto:ss.tuitupou@gmail.com"
                                className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all duration-200 min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                            <a
                                href="tel:+12674231907"
                                className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all duration-200 min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-label="Phone"
                            >
                                <Phone size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/seleti-tuitupou"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all duration-200 min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/Tuitupou"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all duration-200 min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Desktop Social Links */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="https://linkedin.com/in/seleti-tuitupou"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://github.com/Tuitupou"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                        >
                            <Github size={20} />
                        </a>
                    </div>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200 min-h-[48px] min-w-[48px] flex items-center justify-center transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>

                {/* Additional Footer Info - Mobile */}
                <div className="mt-8 pt-6 border-t border-border sm:hidden text-center space-y-3">
                    <p className="text-xs text-muted-foreground">
                        Built with React, Tailwind CSS, and ❤️
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Available for hire • Remote & Tacoma, WA
                    </p>
                    <div className="flex justify-center gap-2 text-xs text-muted-foreground">
                        <a href="#hero" className="hover:text-primary transition-colors py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Home</a>
                        <span>•</span>
                        <a href="#about" className="hover:text-primary transition-colors py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">About</a>
                        <span>•</span>
                        <a href="#projects" className="hover:text-primary transition-colors py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Projects</a>
                        <span>•</span>
                        <a href="#contact" className="hover:text-primary transition-colors py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};