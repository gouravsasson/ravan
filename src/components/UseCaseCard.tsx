import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface UseCaseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  index: number;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon: Icon, title, description, benefits, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/30 p-8 rounded-2xl border border-black/10 hover:border-black/30 transition-all backdrop-blur-xl group"
    >
      <div className="text-black mb-4">
        <Icon className="w-8 h-8 transform group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
      <p className="text-black/70 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-center gap-2 text-black/60">
            <span className="w-1.5 h-1.5 bg-black/40 rounded-full" />
            {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};