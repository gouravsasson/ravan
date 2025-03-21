import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white/30 p-8 rounded-2xl border border-black/10 hover:border-black/30 transition-all backdrop-blur-xl group"
    >
      <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-black" />
      </div>
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <p className="text-black/70">{description}</p>
    </motion.div>
  );
};