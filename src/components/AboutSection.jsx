import React from "react";

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
                           Frontend skills: HTML/CSS, SCSS, Bootstrap, React.js
                           Backend skills: JavaScript, Node.js
                           Mobile skills: React Native
                           Database Management: MySQL
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

                    <div>

                    </div>
                </div>
            </div>
        </section>
    );
};