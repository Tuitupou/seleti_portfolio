import { Briefcase, Code, User } from "lucide-react";
import React from "react";
import { ArrowDown } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Renaissance Technologist
                        </h3>

                        <p className="text-muted-foreground">
                            I’m a Tongan American, born in Los Angeles but raised all over the U.S. I’ve lived everywhere from Philadelphia and Mesa, AZ, to the Bay Area, Long Beach, and now I call Tacoma, WA home. Growing up in so many different places gave me a lot of perspective, but one thing that never changed? I was always the kid who loved gadgets — especially taking them apart to figure out how they worked.

                            Even though tech was never shown to me as a career path, I’ve always been a natural problem-solver. Where some might call it “survival,” I’ve always seen it as “self-sufficient problem solving.” That mindset stuck with me.

                            Fast forward to today — I’m a career changer who found tech later in life, but I’m still that curious kid who dives headfirst into learning. I’m currently working toward a BS/MS in Computer Science at Western Governors University and attending NuCamp Coding Bootcamp. On my downtime, I’m teaching myself database engineering and data science just because I genuinely enjoy it.

                            I’m passionate about tech in all its forms, and I believe that having a wide range of interests helps me see things differently — and sometimes, that’s exactly what a problem needs.
                        </p>

                        <p className="text-muted-foreground">
                           Random fun facts: I'm a father 3 wonderful kids; 2 girls and 1 boy. I've competed in folkstyle wrestling, gridiron football, rugby, and powerlifting.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a href="../../public/seleti_resume.pdf" download="seleti_resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                {" "}
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Frontend Skills</h4>
                                    <p className="text-muted-foreground">
                                        HTML/CSS, SCSS, Bootstrap, TailwindCSS, React.js
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Backend Skills</h4>
                                    <p className="text-muted-foreground">
                                        JavaScript, Node.js
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Database Management</h4>
                                    <p className="text-muted-foreground">
                                        MySQL
                                    </p>
                                </div>
                            </div>
                        </div>
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