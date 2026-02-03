import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Button from "@/components/ui/Button"; 

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-violet-400 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            Software Engineer
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Simret
            <span className="block bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Melak
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Building scalable solutions with cloud technologies, data pipelines, and modern web development. 
            Former SDE Intern at Amazon, specializing in AWS and full-stack development.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <Button
              asChild
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Simret-Melak?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-violet-400 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/simret-melak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-violet-400 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:simrimelak@gmail.com"
              className="text-slate-500 hover:text-violet-400 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-slate-500 hover:text-violet-400 transition-colors">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}