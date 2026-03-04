import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[128px] opacity-50 mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight text-white mb-6">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Mohammad Faiyaz
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg font-light leading-relaxed">
              Computer Engineering Student | Web Developer | Tech Enthusiast
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="/resume.pdf" download>
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base bg-white/5 border-white/10 hover:bg-white/10 hover:text-white transition-all hover:-translate-y-1">
                  Download Resume
                  <Download className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Visual Element / Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl rotate-6 border border-white/10 backdrop-blur-3xl transition-transform hover:rotate-12 duration-700" />
              <div className="absolute inset-0 bg-card rounded-3xl -rotate-3 border border-white/10 shadow-2xl overflow-hidden transition-transform hover:rotate-0 duration-700 p-2">
                {/* coding stock image abstract tech */}
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=800&fit=crop" 
                  alt="Developer working on code"
                  className="w-full h-full object-cover rounded-2xl opacity-80 mix-blend-luminosity grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
