import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I will get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-16 sm:py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-base sm:text-lg">
                    Looking forward to working with you and your team soon.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Information */}
                    <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                        <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                            Contact Information
                        </h3>

                        <div className="space-y-6">
                            {/* Email */}
                            <a
                                href="mailto:ss.tuitupou@gmail.com"
                                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 min-h-[72px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                <div className="p-3 rounded-full bg-primary/10 min-w-[48px] min-h-[48px] flex items-center justify-center">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-lg">Email</h4>
                                    <p className="text-muted-foreground hover:text-primary transition-colors break-all">
                                        ss.tuitupou@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:+12674231907"
                                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 min-h-[72px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                <div className="p-3 rounded-full bg-primary/10 min-w-[48px] min-h-[48px] flex items-center justify-center">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-lg">Phone</h4>
                                    <p className="text-muted-foreground hover:text-primary transition-colors">
                                        +1 (267) 423-1907
                                    </p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-center space-x-4 p-4 rounded-lg min-h-[72px]">
                                <div className="p-3 rounded-full bg-primary/10 min-w-[48px] min-h-[48px] flex items-center justify-center">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-lg">Location</h4>
                                    <p className="text-muted-foreground">
                                        Tacoma, WA, USA
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-6 text-center lg:text-left text-lg">
                                Connect With Me
                            </h4>
                            <div className="flex justify-center lg:justify-start space-x-4">
                                <a
                                    href="https://linkedin.com/in/seleti-tuitupou"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all duration-200 min-h-[56px] min-w-[56px] flex items-center justify-center transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="https://github.com/Tuitupou"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all duration-200 min-h-[56px] min-w-[56px] flex items-center justify-center transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                    aria-label="GitHub Profile"
                                >
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Download Resume - Mobile Prominent */}
                        <div className="pt-6 lg:hidden">
                            <a
                                href="/public/seleti_resume.pdf"
                                download="seleti_resume.pdf"
                                className="w-full flex items-center justify-center gap-2 px-6 py-4 text-lg font-medium border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-200 min-h-[56px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                📄 Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-6 sm:p-8 rounded-lg shadow-sm border border-border order-1 lg:order-2">
                        <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                            Send a Message
                        </h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-3"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-4 text-base rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[48px]"
                                    placeholder="My name is..."
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-3"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-4 text-base rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors min-h-[48px]"
                                    placeholder="person@email.com"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-3"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-4 text-base rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none min-h-[120px]"
                                    placeholder="For display purposes only. Please contact through phone or email."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "w-full flex items-center justify-center gap-3 px-6 py-4 text-lg font-medium rounded-lg transition-all duration-200 min-h-[56px]",
                                    "bg-primary text-primary-foreground hover:bg-primary/90",
                                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                    "disabled:opacity-50 disabled:cursor-not-allowed",
                                    "transform hover:scale-[1.02] active:scale-[0.98]"
                                )}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        For Testing Only
                                        <Send size={20} />
                                    </>
                                )}
                            </button>

                            {/* Form Note */}
                            <p className="text-xs text-muted-foreground text-center mt-4 leading-relaxed">
                                This form is for demonstration purposes only. 
                                <br className="sm:hidden" />
                                <span className="block sm:inline mt-1 sm:mt-0"> Please contact me directly via email or phone above.</span>
                            </p>
                        </form>
                    </div>
                </div>

                {/* Quick Action Bar - Mobile Only */}
                <div className="lg:hidden mt-12 pt-8 border-t border-border">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="mailto:ss.tuitupou@gmail.com"
                            className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 min-h-[56px] text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            <Mail size={20} />
                            Email Me
                        </a>
                        <a
                            href="tel:+12674231907"
                            className="flex-1 flex items-center justify-center gap-3 px-6 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-200 min-h-[56px] text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            <Phone size={20} />
                            Call Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};