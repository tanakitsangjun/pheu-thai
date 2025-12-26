import React from 'react';
import { motion } from 'framer-motion';
import { Policy } from '../types';
import { ICONS_MAP } from '../constants';
import { ArrowRight } from 'lucide-react';

interface Props {
  policy: Policy;
  index: number;
}

const PolicyCard: React.FC<Props> = ({ policy, index }) => {
  const Icon = ICONS_MAP[policy.icon] || ICONS_MAP.zap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-ptRed/30 transition-all duration-300 hover:shadow-xl cursor-pointer"
    >
      <div className="absolute top-0 left-0 w-2 h-0 bg-ptRed group-hover:h-full transition-all duration-300 rounded-l-2xl" />
      
      <div className="mb-6 inline-flex p-4 bg-ptGrey rounded-2xl group-hover:bg-red-50 text-ptNavy group-hover:text-ptRed transition-colors">
        <Icon size={32} strokeWidth={1.5} />
      </div>

      <h3 className="text-2xl font-bold text-ptNavy mb-3 group-hover:text-ptRed transition-colors">
        {policy.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed mb-6">
        {policy.description}
      </p>

      <div className="flex items-center text-sm font-semibold text-ptNavy group-hover:text-ptRed transition-colors">
        <span>อ่านเพิ่มเติม</span>
        <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
};

export default PolicyCard;