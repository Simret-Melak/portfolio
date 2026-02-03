import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300';
  
  const variants = {
    primary: 'bg-violet-600 text-white hover:bg-violet-700 shadow-lg hover:shadow-violet-500/25',
    secondary: 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700',
    outline: 'border-2 border-violet-600 text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}