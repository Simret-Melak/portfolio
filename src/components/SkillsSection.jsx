import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C++", "C", "R", "PySpark", "SQL", "Cypher", "HTML/CSS", "JavaScript", "Node.js"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS CDK", "Lambda", "DynamoDB", "Glue", "Athena", "QuickSight", "Docker", "Git", "Linux"]
  },
  {
    title: "Data & Analytics",
    skills: ["Neo4j", "MongoDB", "PostgreSQL", "PowerBI", "Tableau", "Databricks", "Jupyter", "NumPy", "Pandas"]
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "React Native", "Flask", "Firebase", "Supabase", "GraphQL", "Figma", "Trello"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Technical Skills
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            My Toolkit
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="px-4 py-2 bg-white/10 hover:bg-violet-500/30 text-slate-300 hover:text-white rounded-full text-sm transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "3.88", label: "GPA" },
            { value: "2+", label: "Internships" },
            { value: "5+", label: "Projects" },
            { value: "15+", label: "Clients Served" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-slate-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}