import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeading = ({ subtitle, title, description, className = "" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className={`text-center mb-12 sm:mb-16 ${className}`}
    >
      {subtitle && (
        <span className="text-primary text-sm tracking-[0.3em] uppercase font-body font-medium">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
      <div className="w-16 h-0.5 bg-primary mx-auto mt-6" />
    </motion.div>
  );
};

export default SectionHeading;
