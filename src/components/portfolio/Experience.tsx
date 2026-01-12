import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "IT Developer",
    company: "PT Sari Tirta Internasional",
    location: "Jakarta Utara",
    period: "02/2025 - 02/2026",
    type: "Full-time",
    responsibilities: [
      "Built admin dashboard pages for warehouse management",
      "Performed bug fixing on internal web apps",
      "Conducted unit testing to ensure code stability",
    ],
    technologies: ["Vue.js", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Online Course Student",
    company: "RevoU - Intro to Software Engineering",
    location: "Online",
    period: "10/2024",
    type: "Course",
    responsibilities: [
      "Developed a temperature calculator project",
      "Learned software engineering fundamentals",
      "Completed certificate program",
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    {exp.location}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
