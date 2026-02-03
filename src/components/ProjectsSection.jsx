import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingCart, Pill, TrendingUp, Smartphone } from "lucide-react";
import Button from "@/components/ui/Button"; 
import { Store } from "lucide-react";

const projects = [
  {
    title: "Pharmacy E-Commerce Platform",
    description: "A full-stack medication marketplace supporting prescription uploads, pharmacy inventory management, and real-time sales analytics. Integrated with Gemini AI to implement an intelligent chatbot for customer assistance.",
    technologies: ["React", "Node.js", "Supabase", "Cloudflare", "Gemini AI"],
    icon: Pill,
    color: "from-emerald-500 to-teal-500",
    period: "December 2026",
    features: [
      "Prescription upload system",
      "Pharmacy inventory management",
      "Real-time sales analytics",
      "AI-powered customer chatbot"
    ],
    github: "https://github.com/Simret-Melak/Pharmacy2"
  },
  {
    title: "EasyBuy",
    description: "A mobile app that enables customers to browse stores, add items to a cart, manage payment methods, and check out. Implemented accessibility features like adjustable text size for inclusive user experience.",
    technologies: ["React Native", "Firebase", "Figma"],
    icon: Smartphone,
    color: "from-violet-500 to-purple-500",
    period: "November 2024",
    features: [
      "Store browsing functionality",
      "Shopping cart management",
      "Payment method integration",
      "Accessibility features"
    ],
    github: "https://github.com/Simret-Melak/EasyBuy"
  },
  {
    title: "Predicting Future Sales",
    description: "Kaggle competition project focused on predicting future sales using historical sales data. Developed and implemented machine learning models to analyze and forecast sales trends with high accuracy.",
    technologies: ["Jupyter Notebook", "NumPy", "Pandas", "XGBoost", "Decision Trees"],
    icon: TrendingUp,
    color: "from-orange-500 to-amber-500",
    period: "November 2024",
    features: [
      "Historical data analysis",
      "Decision tree models",
      "XGBoost implementation",
      "Sales trend forecasting"
    ]
  },
  {
  title: "Shoptimize",
  description: "A store management web application that provides role-based access control for managers, cashiers, and administrators. Designed to streamline store operations, inventory tracking, and user management.",
  technologies: ["Python", "Flask", "JavaScript", "Figma"],
  icon: Store, // make sure to import Store from lucide-react
  color: "from-blue-500 to-cyan-500",
  period: "December 2023",
  features: [
    "Role-based access control (Manager, Cashier, Admin)",
    "Inventory management system",
    "User authentication & authorization",
    "Store operations dashboard"
  ],
  github: "https://github.com/Simret-Melak/Shoptimize"
}

];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-600 text-sm font-medium tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-violet-200 transition-all duration-500"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} p-6 relative overflow-hidden`}>
                <project.icon className="w-12 h-12 text-white/90" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full" />
                <p className="absolute bottom-4 left-6 text-white/80 text-sm font-medium">
                  {project.period}
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium text-sm transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}