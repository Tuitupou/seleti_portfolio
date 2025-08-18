import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { SkillCardSkeleton } from "./ui/loading";

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 80, category: "frontend" },
    { name: "SCSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 80, category: "frontend" },
    { name: "React.js", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 70, category: "frontend" },

    // Backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express.js", level: 80, category: "backend" },
    { name: "SQL", level: 75, category: "backend" },

    // Mobile
    { name: "React Native", level: 70, category: "mobile" },

    // Tools
    { name: "Git/GitHub", level: 75, category: "tools" },
    { name: "VS Code", level: 75, category: "tools" },
    { name: "Docker", level: 60, category: "tools" },
    { name: "Playwright", level: 60, category: "tools" },
    { name: "Selenium", level: 60, category: "tools" },
];

const categories = ["all", "frontend", "backend", "mobile", "tools"];

// Enhanced Skill Card Component
const SkillCard = ({ skill, index, isVisible }) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const progressRef = useRef(null);

    useEffect(() => {
        if (isVisible && !hasAnimated) {
            const timer = setTimeout(() => {
                setHasAnimated(true);
            }, index * 100);

            return () => clearTimeout(timer);
        }
    }, [isVisible, hasAnimated, index]);

    return (
        <div
            className={`bg-card p-6 rounded-lg shadow-xs card-hover transform transition-all duration-700 ${
                isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
        >
            <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
            
            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                    ref={progressRef}
                    className={`bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out ${
                        hasAnimated ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        width: hasAnimated ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100 + 300}ms`
                    }}
                />
            </div>
            
            <div className="text-right mt-1">
                <span 
                    className={`text-sm text-muted-foreground transition-all duration-500 ${
                        hasAnimated ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 800}ms` }}
                >
                    {skill.level}%
                </span>
            </div>
        </div>
    );
};

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

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

    // Reset animations when category changes
    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, [activeCategory]);

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-all duration-300 capitalize transform hover:scale-105",
                                activeCategory === category 
                                    ? "bg-primary text-primary-foreground shadow-lg" 
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading
                        ? Array.from({ length: 6 }).map((_, index) => (
                              <SkillCardSkeleton key={index} />
                          ))
                        : filteredSkills.map((skill, index) => (
                              <SkillCard
                                  key={`${skill.name}-${activeCategory}`}
                                  skill={skill}
                                  index={index}
                                  isVisible={isVisible}
                              />
                          ))
                    }
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-12 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};