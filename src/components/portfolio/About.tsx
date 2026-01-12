import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Kelapa Gading, Jakarta Utara
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Computer Science, Binus University
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Experience</h3>
                <p className="text-sm text-muted-foreground">
                  1+ Year Professional Experience
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed">
                I am a versatile Software Engineer with hands-on experience in building 
                admin dashboards, bug fixing, and testing. Proficient in{" "}
                <span className="text-foreground font-medium">HTML, CSS, JavaScript, and Vue</span>, 
                with strengths in adaptability and self-driven learning.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                I am currently pursuing a degree in Computer Science at Binus University 
                with a GPA of 3.40/4.00. I am passionate about creating efficient, 
                user-friendly web applications and continuously improving my skills 
                through practical projects and professional development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
