import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import Button from "@/components/ui/Button"; 

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            I'm actively seeking full-time opportunities starting May 2025. 
            Feel free to reach out if you'd like to discuss potential roles or collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <a
                href="mailto:simrimelak@gmail.com"
                className="flex items-center gap-4 p-5 bg-slate-50 hover:bg-violet-50 rounded-2xl transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-violet-100 group-hover:bg-violet-200 rounded-xl flex items-center justify-center transition-colors">
                  <Mail className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-slate-900 font-medium">simrimelak@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+17036560009"
                className="flex items-center gap-4 p-5 bg-slate-50 hover:bg-violet-50 rounded-2xl transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-violet-100 group-hover:bg-violet-200 rounded-xl flex items-center justify-center transition-colors">
                  <Phone className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="text-slate-900 font-medium">+1 (703) 656-0009</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl">
                <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="text-slate-900 font-medium">Addis Ababa, Ethiopia (Open to relocation and world wide remote work)</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/simret-melak/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 p-4 bg-[#0077B5] hover:bg-[#006396] text-white rounded-xl transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Simret-Melak?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 p-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-3xl p-8 md:p-10 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-violet-100 mb-8">
              I bring expertise in cloud technologies, data engineering, and full-stack development. 
              Let's discuss how I can contribute to your team.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span>AWS & Cloud Infrastructure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span>Data Analytics & Visualization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span>Full-Stack Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span>Mobile App Development</span>
              </div>
            </div>

            <Button
              asChild
              className="w-full bg-white text-violet-600 hover:bg-violet-50 py-6 text-base font-semibold rounded-xl transition-all duration-300"
            >
              <a href="mailto:simrimelak@gmail.com">
                <Send className="w-5 h-5 mr-2" />
                Send Me a Message
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}