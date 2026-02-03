import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Amazon",
    role: "Software Development Engineering Intern",
    location: "Arlington, Virginia",
    period: "May 2024 – August 2024",
    logo: "🔶",
    highlights: [
      "Designed and developed a scalable DynamoDB schema to manage KPI metrics under the FinTech org",
      "Engineered cloud-based infrastructure using AWS Cloud Development Kit, reducing deployment time by 30%",
      "Developed data processing pipelines using AWS Lambda for real-time data ingestion and transformation",
      "Automated data workflows through AWS Glue, improving query efficiency by 40% with Athena",
      "Delivered interactive dashboards in QuickSight used by 20+ Finance and Accounting team members"
    ],
    technologies: ["AWS CDK", "DynamoDB", "Lambda", "Glue", "Athena", "QuickSight"]
  },
  {
    company: "Ithaca College",
    role: "Business Intelligence Engineer",
    location: "Ithaca, New York",
    period: "July 2023 – December 2025",
    logo: "🎓",
    highlights: [
      "Developed and optimized graph database systems for 5+ distinct projects using Neo4j",
      "Utilized graph ML algorithms like centrality and community detection for pattern recognition",
      "Implemented ETL processes using Databricks and PowerBI with version control practices",
      "Created interactive visualizations for stakeholders analyzing datasets over 1 TB",
      "Interacted directly with 15+ clients, delivering tailored dashboards for data-driven decisions"
    ],
    technologies: ["Neo4j", "Databricks", "PowerBI", "Python", "Cypher"]
  },
  {
    company: "Ithaca College",
    role: "Undergraduate Researcher",
    location: "Ithaca, New York",
    period: "November 2022 – July 2023",
    logo: "🔬",
    highlights: [
      "Conducted research on the impacts of colonialism in Africa using database systems",
      "Developed and managed relational, graph-based, and spatial databases",
      "Presented findings at CCSCNE conference showcasing SQL, Python, Neo4j, and QGIS integration",
      "Engineered project infrastructure on Linux-based server for high availability"
    ],
    technologies: ["SQL", "Python", "Neo4j", "QGIS", "Linux"]
  },
  {
    company: "Dan Energy R&D",
    role: "Software Development Engineering Intern",
    location: "Addis Ababa, Ethiopia",
    period: "May 2022 – August 2022",
    logo: "⚡",
    highlights: [
      "Authored proposal for implementing an Enterprise Resource Planning (ERP) system",
      "Researched and evaluated open-source ERP systems for scalability",
      "Analyzed and customized ERP codebase with a team of five engineers"
    ],
    technologies: ["ERP Systems", "System Analysis", "Team Collaboration"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Where I've Worked
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  {exp.logo}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-violet-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <ChevronRight className="w-4 h-4 text-violet-500 mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}