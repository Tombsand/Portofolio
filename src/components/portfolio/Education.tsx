import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Binus University",
    period: "2022 - Present",
    gpa: "3.40/4.00",
    status: "Undergraduate",
    icon: GraduationCap,
  },
];

const certificates = [
  {
    name: "Intro to Software Engineering",
    issuer: "RevoU",
    date: "October 2024",
    icon: Award,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Education & Certificates
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              {education.map((edu, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <h4 className="font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-primary">{edu.institution}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <Badge variant="secondary">{edu.status}</Badge>
                      <Badge variant="outline">GPA: {edu.gpa}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certificates */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certificates
              </h3>
              {certificates.map((cert, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <h4 className="font-semibold text-foreground">
                      {cert.name}
                    </h4>
                    <p className="text-primary">{cert.issuer}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
