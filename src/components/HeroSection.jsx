import { ArrowDown, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 md:pt-0"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6 md:space-y-8">
                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
                        <span className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
                            Hi, I'm
                        </span>
                        <span className={`text-primary opacity-0 ${isVisible ? 'animate-fade-in-delay-1' : ''} block sm:inline`}>
                            {" "}Seleti
                        </span>
                        <span className={`text-gradient ml-2 opacity-0 ${isVisible ? 'animate-fade-in-delay-2' : ''} block sm:inline`}>
                            {" "}Tuitupou
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <div className={`opacity-0 ${isVisible ? 'animate-fade-in-delay-3' : ''}`}>
                        <h2 className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-4">
                            "Full Stack Developer | QA Automation | Accounting-Tech Integrator | Future AI Engineer"
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            I build intelligent, automated, and data-driven solutions that bridge software engineering, accounting systems, and AI. With a foundation in full stack development and growing expertise in QA automation and business process optimization, I help organizations work smarter and scale faster. My ultimate mission? To design AI-powered systems that transform how businesses operate.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className={`pt-6 opacity-0 ${isVisible ? 'animate-fade-in-delay-4' : ''}`}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            {/* Primary CTA */}
                            <button
                                onClick={() => scrollToSection('#projects')}
                                className="cosmic-button w-full sm:w-auto min-h-[48px] px-8 py-3 text-lg font-medium transform hover:scale-105 focus:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                View My Work
                            </button>

                            {/* Secondary CTA */}
                            <button
                                onClick={() => scrollToSection('#contact')}
                                className="w-full sm:w-auto min-h-[48px] px-8 py-3 text-lg font-medium border-2 border-primary text-primary bg-transparent rounded-full hover:bg-primary/10 transform hover:scale-105 focus:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Get In Touch
                            </button>
                        </div>

                        {/* Quick Contact Links - Mobile */}
                        <div className="flex sm:hidden justify-center gap-4 mt-6">
                            <a
                                href="mailto:ss.tuitupou@gmail.com"
                                className="p-3 bg-primary/10 text-primary rounded-full min-h-[48px] min-w-[48px] flex items-center justify-center hover:bg-primary/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-label="Send email"
                            >
                                <Mail size={20} />
                            </a>
                            <a
                                href="tel:+12674231907"
                                className="p-3 bg-primary/10 text-primary rounded-full min-h-[48px] min-w-[48px] flex items-center justify-center hover:bg-primary/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-label="Call phone"
                            >
                                <Phone size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Stats - Mobile Optimized */}
                    <div className={`pt-8 opacity-0 ${isVisible ? 'animate-fade-in-delay-4' : ''}`}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-lg sm:max-w-2xl mx-auto">
                            <div className="text-center p-4 bg-card/50 rounded-lg backdrop-blur-sm border border-border/50">
                                <div className="text-2xl font-bold text-primary">3+</div>
                                <div className="text-sm text-muted-foreground">Years Learning</div>
                            </div>
                            <div className="text-center p-4 bg-card/50 rounded-lg backdrop-blur-sm border border-border/50">
                                <div className="text-2xl font-bold text-primary">10+</div>
                                <div className="text-sm text-muted-foreground">Projects Built</div>
                            </div>
                            <div className="text-center p-4 bg-card/50 rounded-lg backdrop-blur-sm border border-border/50">
                                <div className="text-2xl font-bold text-primary">24/7</div>
                                <div className="text-sm text-muted-foreground">Passion Driven</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Hidden on small screens, optimized touch target on larger */}
            <button
                onClick={() => scrollToSection('#about')}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex flex-col items-center animate-bounce hover:animate-none transition-all duration-200 p-4 min-h-[48px] min-w-[48px] justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                aria-label="Scroll to about section"
            >
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </button>
        </section>
    );
};