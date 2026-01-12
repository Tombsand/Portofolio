import { ExternalLink, Github, Thermometer, LayoutDashboard, FolderPlus } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "High Tide",
    description:
      "A web application to store film data for you to watch later on",
    icon: Thermometer,
    technologies: ["Vue.js", "Vite", "Tailwinds", "Bun", "Hono"],
    image: "/High_Tide.png",
    links: {
      demo: null,
      github: null,
    },
  },
  {
    title: "SOS Admin Dashboard",
    description:
      "SOS Admin Dashboard is an application used to manage menu image data. This application allows administrators to update menu images and delete menu data through a responsive and user-friendly interface.",
    icon: LayoutDashboard,
    technologies: ["Vue.js", "JavaScript", "CSS"],
    image: "/SOS_Admin_Dashboard.png",
    links: {
      demo: null,
      github: null,
    },
  },
  {
    title: "Portofolio Website",
    description:
      "A Portofolio Website build using React and tailwind.",
    icon: FolderPlus, 
    technologies: ["React", "Tailwind"],
    image: "/Portofolio.png",
    links: {
      demo: null,
      github: null,
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A showcase of my work and personal projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader className="flex items-center">
                  {/* <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div> */}
                  <div>
                    {project.image ? (
                      <img src={project.image} className="rounded-lg h-40"></img>
                    ) : (
                      <img src="/placeholder.svg" className="rounded-lg h-40"></img>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex flex-col text-center items-center">
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {(project.links.demo || project.links.github) && (
                    <div className="flex gap-2">
                      {project.links.demo && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.links.github && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
