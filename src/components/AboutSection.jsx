import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Passionate About Technology
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              I'm a Computer Science Graduate from Ithaca College with a passion for building 
              scalable software solutions. My experience spans from cloud infrastructure at 
              Amazon to graph database systems and full-stack development.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              I thrive at the intersection of software engineering and data analytics, 
              leveraging tools like AWS, Neo4j, and modern web frameworks to create 
              impactful applications that solve real-world problems.
            </p>

            <div className="grid gap-4">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Ithaca College</p>
                  <p className="text-sm text-slate-500">B.S. Computer Science, Minor in Business Analytics</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">GPA: 3.88/4.0</p>
                  <p className="text-sm text-slate-500">Dean's List • Graduating May 2025</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Ithaca, New York</p>
                  <p className="text-sm text-slate-500">Open to relocation</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-violet-100 to-indigo-100 rounded-3xl p-8 md:p-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Leadership & Community</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-violet-500 pl-4">
                  <p className="font-semibold text-slate-900">Vice President</p>
                  <p className="text-violet-600 text-sm">Girls Who Code IC</p>
                  <p className="text-slate-500 text-sm mt-1">
                    Organizing events with industry professionals and leading technical interview workshops
                  </p>
                </div>

                <div className="border-l-2 border-violet-500 pl-4">
                  <p className="font-semibold text-slate-900">Project Manager</p>
                  <p className="text-violet-600 text-sm">Business and Data Analytics Club</p>
                  <p className="text-slate-500 text-sm mt-1">
                    Leading a team of 15 members on analytics-driven projects with local businesses
                  </p>
                </div>

                <div className="border-l-2 border-violet-500 pl-4">
                  <p className="font-semibold text-slate-900">Member</p>
                  <p className="text-violet-600 text-sm">ColorStack</p>
                  <p className="text-slate-500 text-sm mt-1">
                    Part of the community supporting Black and Latinx students in tech
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}