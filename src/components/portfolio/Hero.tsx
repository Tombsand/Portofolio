import { ArrowDown, Download, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/30 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground mb-4 animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
            Paulus Steven Lie
          </h1>
          <h2 className="text-xl md:text-2xl text-primary font-medium mb-6 animate-fade-in">
            Software Engineer / IT Developer
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto animate-fade-in">
            Versatile Software Engineer with hands-on experience in building admin dashboards, 
            bug fixing, and testing. Proficient in HTML, CSS, JavaScript, and Vue, with 
            strengths in adaptability and self-driven learning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
            <Button size="lg" onClick={scrollToAbout}>
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/Paulus_Steven_Lie_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 animate-fade-in">
            <a
              href="https://www.linkedin.com/in/paulus-steven-lie"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="mailto:pauluslie507@gmail.com"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
