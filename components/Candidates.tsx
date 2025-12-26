import React from 'react';
import { motion } from 'framer-motion';
import { CANDIDATES } from '../constants';
import { ChevronRight, Users, Star } from 'lucide-react';

interface Props {
  onOpenAll: () => void;
}

const Candidates: React.FC<Props> = ({ onOpenAll }) => {
  // Show top 4 key figures for a better grid balance
  const previewCandidates = CANDIDATES.filter(c => c.category === 'executive' || c.category === 'economic').slice(0, 4);

  return (
    <section id="บุคคลสำคัญ" className="py-20 md:py-32 bg-white relative overflow-hidden font-sans">
      
      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-[#F8F9FA] -skew-y-3 origin-top-left z-0"></div>
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-gradient-to-t from-gray-100 to-transparent rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-2 text-[#E31E27] font-bold text-xs uppercase tracking-[0.2em] mb-3">
                   <Users size={16} />
                   <span>Leadership</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#003366] leading-tight">
                    ทีมบริหาร<span className="text-[#E31E27] block md:inline">มืออาชีพ</span>
                </h2>
                <p className="text-gray-500 mt-4 max-w-lg font-light">
                    ผสานพลังคนรุ่นใหม่และผู้มีประสบการณ์ เพื่อขับเคลื่อนนโยบายที่ทำได้จริง
                </p>
            </motion.div>

            <motion.button 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onClick={onOpenAll}
                className="hidden md:flex items-center gap-2 text-[#003366] font-bold hover:text-[#E31E27] transition-colors border-b-2 border-transparent hover:border-[#E31E27] pb-1"
            >
                ดูบุคลากรทั้งหมด <ChevronRight size={18} />
            </motion.button>
        </div>

        {/* Premium Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12">
            {previewCandidates.map((person, index) => (
                <motion.div
                    key={person.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative cursor-pointer"
                    onClick={onOpenAll}
                >
                    {/* Card Container */}
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 shadow-md group-hover:shadow-2xl group-hover:shadow-blue-900/20 transition-all duration-500">
                         
                         {/* Image: Full Color by Default */}
                         <img 
                            src={person.image} 
                            alt={person.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                         />
                         
                         {/* Gradient Overlay - Adjusted opacity for color images */}
                         <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                         {/* Content Overlay */}
                         <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            
                            <div className="overflow-hidden mb-1">
                                <span className="inline-block bg-[#E31E27] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {person.category === 'executive' ? 'Executive' : 'Key Figure'}
                                </span>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-white leading-tight mb-1">
                                {person.name}
                            </h3>
                            <p className="text-white/90 text-xs md:text-sm font-light truncate group-hover:text-white transition-colors">
                                {person.role}
                            </p>
                            
                            {/* Expertise Tag appearing on hover */}
                            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                                <div className="pt-3 mt-3 border-t border-white/20 flex items-center gap-2 text-white/90 text-xs">
                                    <Star size={12} className="text-yellow-400" fill="currentColor"/>
                                    <span>{person.expertise}</span>
                                </div>
                            </div>
                         </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden text-center mt-8">
            <button 
                onClick={onOpenAll}
                className="w-full bg-[#003366] text-white py-4 rounded-xl font-bold hover:bg-[#E31E27] transition-colors"
            >
                ดูรายชื่อทั้งหมด
            </button>
        </div>

      </div>
    </section>
  );
};

export default Candidates;