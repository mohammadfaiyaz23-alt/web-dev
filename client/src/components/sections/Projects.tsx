import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Github, ExternalLink, Dices, BookOpen, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "Dice Roller Web App",
      description: "A fun, interactive web application that simulates rolling different types of dice. Features smooth physics-based animations and customizable die faces for tabletop gamers.",
      icon: Dices,
      tags: ["HTML", "CSS", "JavaScript", "Canvas API"],
      github: "https://github.com",
      link: "#",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Student Learning App",
      description: "A comprehensive UI/UX project focused on delivering an intuitive learning management system for students. Designed with accessibility and mobile-first principles in mind.",
      icon: BookOpen,
      tags: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
      github: "https://github.com",
      link: "#",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Climate AI Predictor",
      description: "A hackathon-winning project that leverages AI models to predict local climate patterns. Built an interactive dashboard to visualize environmental data anomalies.",
      icon: Leaf,
      tags: ["Node.js", "Express", "OpenAI API", "Recharts"],
      github: "https://github.com",
      link: "#",
      color: "from-green-500/20 to-emerald-500/20",
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Some of the recent projects I've built during my studies and hackathons."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-2xl bg-card border border-white/5 overflow-hidden hover-glow transition-all duration-300 group"
            >
              {/* Project Header/Image area placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center border-b border-white/5 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]"></div>
                <project.icon className="w-20 h-20 text-white/50 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full bg-transparent border-white/10 hover:bg-white/5 hover:text-white">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex-1">
                    <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
