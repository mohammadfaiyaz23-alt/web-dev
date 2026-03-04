import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, Trophy, Medal } from "lucide-react";

export function Certificates() {
  const achievements = [
    {
      title: "Indradhanu International Grand Challenge",
      role: "Finalist / Participant",
      date: "2023",
      icon: Trophy,
      description: "Competed globally to solve complex engineering problems under strict time constraints, showcasing strong analytical and teamwork skills."
    },
    {
      title: "Full-Stack Web Development Bootcamp",
      role: "Certified Developer",
      date: "2023",
      icon: Award,
      description: "Completed an intensive online course covering the MERN stack, resulting in the creation of several capstone projects."
    },
    {
      title: "Local University Hackathon",
      role: "1st Place Winner",
      date: "2024",
      icon: Medal,
      description: "Led a team of 4 to build 'Climate AI Predictor' in 48 hours, winning first place for innovation and technical execution."
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-white/[0.01]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Achievements" 
          subtitle="Milestones, certifications, and hackathon participations."
          centered
        />
        
        <div className="mt-16 space-y-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-[-32px] w-px bg-white/10 -translate-x-1/2 last:hidden"></div>
              
              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-card border-2 border-primary -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                
                {/* Content Card */}
                <div className="md:w-[45%] w-full">
                  <div className="bg-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors shadow-lg shadow-black/20">
                    <span className="text-primary font-mono text-sm font-semibold tracking-wider block mb-2">{item.date}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <h4 className="text-accent text-sm font-medium mb-4">{item.role}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                {/* Empty space for opposite side of timeline */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
