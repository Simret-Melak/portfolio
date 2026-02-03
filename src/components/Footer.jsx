import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-white mb-2">Simret Melak</p>
            <p className="text-slate-500 text-sm">Software Engineer • Ithaca College 2025</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Simret-Melak?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/simret-melak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:simrimelak@gmail.com"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Simret Melak. Built with
            <Heart className="w-4 h-4 text-violet-500 fill-violet-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}