import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

const skills = [
    //Frontend
    { name: "HTML/CSS", level: 80, category: "frontend" },
    { name: "SCSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 50, category: "frontend" },
    { name: "React.js", level: 50, category: "frontend" },
    { name: "Tailwind CSS", level: 60, category: "frontend" },

    //Backend
    { name: "Node.js", level: 50, category: "backend" },
    { name: "MySQL", level: 55, category: "backend" },

    //Mobile
    { name: "React Native", level: 50, category: "mobile" },

    //Tools
    { name: "Git/GitHub", level: 70, category: "tools" },
    { name: "VS Code", level: 70, category: "tools" },
    { name: "Docker", level: 50, category: "tools" },
];

const categories = ["all", "frontend", "backend", "mobile", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter (
        (skill) => activeCategory === "all" || skill.category === activeCategory 
    );

    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-full animate-[grow_1.5s_ease-out"
                                    style={{width: skill.level + "%"}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-12 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};