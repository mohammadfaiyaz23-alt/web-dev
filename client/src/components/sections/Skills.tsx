import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { 
  FileCode2, 
  Paintbrush, 
  TerminalSquare, 
  Server, 
  Database, 
  GitBranch, 
  Figma, 
  Layers
} from "lucide-react";

export function Skills() {
  const skills = [
    { name: "HTML", icon: FileCode2, color: "hover:text-orange-500 hover:border-orange-500/50" },
    { name: "CSS", icon: Paintbrush, color: "hover:text-blue-500 hover:border-blue-500/50" },
    { name: "JavaScript", icon: TerminalSquare, color: "hover:text-yellow-400 hover:border-yellow-400/50" },
    { name: "Node.js", icon: Server, color: "hover:text-green-500 hover:border-green-500/50" },
    { name: "Express", icon: Layers, color: "hover:text-gray-300 hover:border-gray-300/50" },
    { name: "MongoDB", icon: Database, color: "hover:text-emerald-500 hover:border-emerald-500/50" },
    { name: "Git & GitHub", icon: GitBranch, color: "hover:text-orange-600 hover:border-orange-600/50" },
    { name: "UI/UX Basics", icon: Figma, color: "hover:text-purple-500 hover:border-purple-500/50" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="My toolkit for building digital experiences."
          centered
        />
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={item}
              className={`flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-card border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/50 cursor-pointer ${skill.color}`}
            >
              <skill.icon className="w-12 h-12 transition-colors duration-300" />
              <span className="font-medium text-white transition-colors duration-300">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
