import { Briefcase, Code, User, BookOpen, Radar, Layers } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { AboutCardSkeleton } from "./ui/loading";

const aboutCards = [
    {
        icon: BookOpen,
        title: "Lifelong Learner",
        description: "Continuously expanding my skill set across software engineering, QA automation, accounting systems, and AI to stay current and effective in a rapidly evolving industry."
    },
    {
        icon: User,
        title: "Cooperative",
        description: "With a background in team sports and anthropology, I have the cross-cultural skills and experience to work effectively in collaborative environments."
    },
    {
        icon: Briefcase,
        title: "Industrious", 
        description: "In my previous position, I have worked 80+hrs/week for 8 years straight in stressful conditions."
    },
    {
        icon: Radar,
        title: "Future-Focused",
        description: "Actively follow and integrate emerging technologies with a focus on AI-driven systems and long-term business impact."
    },
    {
        icon: Layers,
        title: "Systems Thinker",
        description: "Approach problems holistically by considering the interaction of technical, operational, and business components to design scalable solutions."
    }
];

// Enhanced About Card Component
const AboutCard = ({ card, index, isVisible }) => {
    const Icon = card.icon;
    
    return (
        <div 
            className={`gradient-border p-6 card-hover transform transition-all duration-700 ${
                isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {card.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                        {card.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const AboutSection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Text Content */}
                    <div 
                        className={`space-y-6 transform transition-all duration-700 ${
                            isVisible 
                                ? 'opacity-100 translate-x-0' 
                                : 'opacity-0 -translate-x-8'
                        }`}
                    >
                        <h3 className="text-2xl font-semibold">
                            Renaissance Technologist
                        </h3>

                        <div className="prose prose-gray dark:prose-invert max-w-none">
                            <p className="text-muted-foreground text-left leading-relaxed">
                                I'm a Tongan American, born in Los Angeles and raised all over the U.S.; from Philadelphia to Mesa, AZ, the Bay Area, Long Beach, and now Tacoma, WA. Growing up in so many places gave me perspective, adaptability, and a knack for connecting with people from all walks of life.
                            </p>
                            
                            <p className="text-muted-foreground text-left leading-relaxed">
                                One thing that never changed? I've always been the kid who loved gadgets; especially taking them apart to see how they worked. Tech wasn't presented to me as a career path, but I've always been a natural problem-solver. Some might call it "survival," but I call it self-sufficient problem-solving, and that mindset still drives me today.
                            </p>

                            <p className="text-muted-foreground text-left leading-relaxed">
                                I'm a career changer who found tech later in life, but I'm still that curious kid diving headfirst into learning. Today, I'm building my expertise across:
                            </p>
                            
                            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                                <li>Full Stack Development (NuCamp Coding Bootcamp graduate)</li>
                                <li>QA Automation (Playwright, Selenium)</li>
                                <li>Accounting Systems (QuickBooks, Xero, financial process optimization)</li>
                                <li>Data Science & AI Foundations</li>
                            </ul>

                            <p className="text-muted-foreground text-left leading-relaxed">
                                I'm currently pursuing a BS/MS in Computer Science at Western Governors University while running my consultancy, Tuitupou Tech & Accounting Solutions, where I design intelligent, automated, and data-driven solutions for small businesses. My ultimate goal? To engineer AI-powered systems that help organizations scale smarter and faster.
                            </p>

                            <p className="text-muted-foreground text-left leading-relaxed">
                                Fun facts: I'm a father of three amazing kids (two girls and one boy). I've competed in folkstyle wrestling, gridiron football, rugby, and powerlifting — because I like challenges that push both my mind and body.
                            </p>
                        </div>

                        <div 
                            className={`flex flex-col sm:flex-row gap-4 pt-4 justify-center transform transition-all duration-700 ${
                                isVisible 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: '400ms' }}
                        >
                            <a href="#contact" className="cosmic-button transform hover:scale-105 transition-transform duration-200">
                                Get In Touch
                            </a>

                            <a 
                                href="/public/seleti_resume.pdf" 
                                download="seleti_resume.pdf" 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Cards */}
                    <div className="grid grid-cols-1 gap-8">
                        {isLoading
                            ? Array.from({ length: 5 }).map((_, index) => (
                                  <AboutCardSkeleton key={index} />
                              ))
                            : aboutCards.map((card, index) => (
                                  <AboutCard
                                      key={index}
                                      card={card}
                                      index={index}
                                      isVisible={isVisible}
                                  />
                              ))
                        }
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-12 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};