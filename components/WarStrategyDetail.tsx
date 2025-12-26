import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Printer, Calendar, ShieldCheck } from 'lucide-react';
import { WarStrategy } from '../types';
import { ICONS_MAP } from '../constants';

interface Props {
  strategy: WarStrategy;
  onClose: () => void;
}

const WarStrategyDetail: React.FC<Props> = ({ strategy, onClose }) => {
  const Icon = ICONS_MAP[strategy.icon];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on mount
    if (containerRef.current) {
        containerRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <motion.div 
         ref={containerRef}
         initial={{ x: '100%' }}
         animate={{ x: 0 }}
         exit={{ x: '100%' }}
         transition={{ type: "spring", damping: 30, stiffness: 300 }}
         className="fixed inset-0 z-[100] bg-[#121212] overflow-y-auto custom-scrollbar"
    >
        {/* Sticky Navbar */}
        <div className="sticky top-0 left-0 w-full bg-[#121212]/90 backdrop-blur-md border-b border-white/5 z-50 px-6 py-4 flex justify-between items-center">
            <button 
                onClick={onClose}
                className="flex items-center gap-2 text-white hover:text-red-400 transition-colors px-4 py-2 rounded-full bg-white/5 hover:bg-white/10"
            >
                <ArrowLeft size={20} />
                <span className="font-bold">ย้อนกลับ</span>
            </button>

            <div className="flex gap-2">
                 <button className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors">
                    <Share2 size={20} />
                 </button>
            </div>
        </div>

        <div className="max-w-4xl mx-auto py-12 px-6">
             
             {/* Header */}
             <div className="mb-12">
                 <div className="flex flex-col md:flex-row gap-8 items-start">
                     {/* Big Icon */}
                     <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${strategy.color} flex items-center justify-center shadow-2xl shrink-0`}>
                        <Icon size={48} className="text-white" strokeWidth={1.5} />
                     </div>

                     <div className="flex-1">
                         <div className="flex flex-wrap gap-2 mb-4">
                            {strategy.tags?.map((tag, i) => (
                                <span key={i} className="text-xs font-bold text-red-400 bg-red-900/10 px-3 py-1 rounded-full border border-red-900/20 uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                         </div>
                         <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                             {strategy.title}
                         </h1>
                         <p className="text-xl text-gray-400 font-light leading-relaxed border-l-4 border-white/10 pl-6">
                             {strategy.description}
                         </p>
                     </div>
                 </div>
             </div>

             {/* Divider */}
             <div className="w-full h-px bg-white/10 mb-12"></div>

             {/* Content */}
             <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-red-400 prose-ul:marker:text-red-500">
                {strategy.fullContent ? (
                    <div dangerouslySetInnerHTML={{ __html: strategy.fullContent }} />
                ) : (
                    <div className="p-12 text-center bg-white/5 rounded-2xl border border-dashed border-white/10 text-gray-500">
                        <ShieldCheck size={48} className="mx-auto mb-4 opacity-50" />
                        <p>รายละเอียดเชิงลึกอยู่ระหว่างการดำเนินการอัปเดตข้อมูล</p>
                    </div>
                )}
             </div>

             {/* Action Footer */}
             <div className="mt-20 pt-10 border-t border-white/10">
                 <div className="bg-[#1E1E1E] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border border-white/5">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-10 -mr-20 -mt-20 pointer-events-none"></div>
                     <div className="relative z-10">
                         <h3 className="text-2xl font-bold text-white mb-4">พบเบาะแสการทุจริต?</h3>
                         <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                             แจ้งเบาะแสได้ที่ศูนย์ปฏิบัติการต้านโกง (ACT) ข้อมูลของท่านจะถูกเก็บเป็นความลับสูงสุด
                         </p>
                         <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-red-600/30 transition-all transform hover:-translate-y-1">
                             แจ้งเบาะแสทันที
                         </button>
                     </div>
                 </div>
             </div>

        </div>
    </motion.div>
  );
};

export default WarStrategyDetail;