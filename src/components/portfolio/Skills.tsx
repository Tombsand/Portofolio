import { Code, Puzzle, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const technicalSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Vue.js", level: 85 },
];

const softSkills = [
  { name: "Problem Solving", icon: Puzzle },
  { name: "Adaptability", icon: RefreshCw },
  { name: "Self-Driven Learning", icon: Code },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Soft Skills
              </h3>
              <div className="grid gap-4">
                {softSkills.map((skill) => (
                  <Card key={skill.name} className="bg-card border-border">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <skill.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
