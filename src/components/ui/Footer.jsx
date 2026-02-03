import { Linkedin, Github, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
            <p className="text-slate-400 max-w-md">
              Passionate about creating impactful solutions through technology.
              Always open to new opportunities and collaborations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400"
        >
          <p>© {currentYear} Your Name. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
}