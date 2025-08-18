import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { LazyImage } from "./ui/LazyImage";
import { ProjectCardSkeleton } from "./ui/loading";

const projects = [
    {
        id: 1,
        title: "Tuitupou Coffee Shop",
        description: "Landing page for a coffee shop using HTML, CSS, and Bootstrap",
        image: "/projects/project_1.png",
        tags: ["HTML", "CSS", "Bootstrap"],
        demoUrl: "https://tuitupoucoffeeshop2025.web.app/",
        githubUrl: "https://github.com/Tuitupou/coffee_shop.git",
    },
    {
        id: 2,
        title: "Tuitupou Solutions",
        description: "Landing page for my tech and accounting consultancy",
        image: "/projects/project_2.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "https://tuitupou-tech.vercel.app/",
        githubUrl: "https://github.com/Tuitupou/tuitupou_tech.git",
    },
    {
        id: 3,
        title: "Game of Thrones App",
        description: "Game of Thrones app showing different characters, books, and houses.",
        image: "/projects/project_3.png",
        tags: ["React", "Node"],
        demoUrl: "#",
        githubUrl: "https://github.com/Tuitupou/got_app.git",
    },
];

// Enhanced Project Card Component
const ProjectCard = ({ project, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, index * 200); // Stagger animations

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div
            className={`group bg-card rounded-lg overflow-hidden shadow-xs card-hover transform transition-all duration-700 ${
                isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
            }`}
        >
            <div className="h-48 overflow-hidden relative">
                <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    skeletonClassName="h-48"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors"
                        onClick={(e) => project.demoUrl === "#" && e.preventDefault()}
                    >
                        <ExternalLink size={20} />
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors"
                    >
                        <Github size={20} />
                    </a>
                </div>
            </div>

            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground transform hover:scale-105 transition-transform duration-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                </p>
                
                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={(e) => project.demoUrl === "#" && e.preventDefault()}
                        >
                            <ExternalLink size={20} />
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ProjectsSection = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my featured projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading
                        ? Array.from({ length: 3 }).map((_, index) => (
                              <ProjectCardSkeleton key={index} />
                          ))
                        : projects.map((project, index) => (
                              <ProjectCard
                                  key={project.id}
                                  project={project}
                                  index={index}
                              />
                          ))
                    }
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2 transform hover:scale-105 transition-transform duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Tuitupou"
                    >
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
