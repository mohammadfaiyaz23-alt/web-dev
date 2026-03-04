import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrainCircuit, Code2, Rocket, Zap } from "lucide-react";

export function About() {
  const highlights = [
    { icon: BrainCircuit, title: "AI Enthusiast", desc: "Passionate about machine learning and integrating AI into practical web solutions." },
    { icon: Code2, title: "Web Development", desc: "Crafting responsive, accessible, and high-performance web applications." },
    { icon: Zap, title: "Hackathon Veteran", desc: "Thriving in fast-paced environments to build innovative prototypes." },
    { icon: Rocket, title: "Continuous Learner", desc: "Always exploring new frameworks, languages, and cutting-edge technologies." },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="A glimpse into my journey, passions, and what drives me as a developer."
        />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
              <p className="mb-6">
                I am <strong className="text-white">Mohammad Faiyaz</strong>, a dedicated Computer Engineering student with a deep-rooted passion for technology and software development. My journey started with a simple curiosity about how things work on the internet, which quickly evolved into a full-blown love for coding.
              </p>
              <p className="mb-6">
                Currently, my core interests lie at the intersection of <strong className="text-primary">Artificial Intelligence</strong> and <strong className="text-accent">Modern Web Development</strong>. I believe the future belongs to intelligent applications that provide seamless, intuitive user experiences.
              </p>
              <p>
                When I'm not studying or working on assignments, you can usually find me participating in hackathons, experimenting with new UI/UX designs, or learning the latest JavaScript frameworks to keep my skills sharp.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-colors group"
              >
                <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
