import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { WAR_STRATEGIES, ICONS_MAP } from '../constants';
import { ArrowRight, ShieldAlert, Activity, Scale, FileText, ChevronRight } from 'lucide-react';
import { WarStrategy } from '../types';
import WarStrategyDetail from './WarStrategyDetail';

const StrategyCard: React.FC<{
    strategy: WarStrategy;
    index: number;
    onClick: () => void;
}> = ({ strategy, index, onClick }) => {
    const Icon = ICONS_MAP[strategy.icon];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={onClick}
            className="group relative mb-6 last:mb-0 cursor-pointer w-full"
        >
            {/* Card Container: 
                - Matte Black Background
                - Persistent Red Border (Left) acting as a file spine
                - Active state for touch feedback 
            */}
            <div className="relative bg-[#111111] border-l-4 border-[#E31E27] p-6 md:p-10 rounded-r-xl transition-all duration-200 active:scale-[0.98] active:bg-[#1a1a1a] shadow-lg">
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    
                    {/* Index & Icon Column */}
                    <div className="flex items-center justify-between w-full md:w-auto md:flex-col md:items-start gap-4 shrink-0">
                        <div className="flex items-center gap-4">
                            <span className="text-3xl md:text-4xl font-black text-[#333] group-hover:text-[#E31E27] transition-colors duration-300">
                                0{index + 1}
                            </span>
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                                 <Icon size={20} />
                            </div>
                        </div>
                        
                        {/* Mobile Only: Chevron to indicate clickability right at the top */}
                        <div className="md:hidden text-[#E31E27]">
                            <ChevronRight size={24} />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 w-full">
                        <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#E31E27] transition-colors leading-tight">
                            {strategy.title}
                        </h3>
                        
                        <p className="text-gray-400 font-light leading-relaxed text-sm md:text-lg mb-6 border-l border-white/10 pl-4 py-1">
                            {strategy.description}
                        </p>

                        {/* Footer: Tags & CTA */}
                        <div className="flex flex-wrap gap-4 items-center justify-between mt-auto pt-4 border-t border-white/5">
                            <div className="flex flex-wrap gap-2">
                                {strategy.tags?.slice(0, 3).map((tag, i) => (
                                    <span key={i} className="text-[10px] md:text-xs font-medium text-gray-500 bg-white/5 px-2 py-1 md:px-3 md:py-1.5 rounded uppercase tracking-wider border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            {/* CTA: Always Visible now */}
                            <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#E31E27] group-active:text-white transition-colors">
                                <span>อ่านรายละเอียด</span>
                                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const WarRoom: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<WarStrategy | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (selectedStrategy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedStrategy]);

  return (
    <section ref={containerRef} className="relative bg-[#050505] text-white min-h-screen py-16 md:py-24 border-t border-white/5">
        
        {/* Subtle Noise Texture only */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                
                {/* --- LEFT PANEL: Sticky Editorial Dashboard --- */}
                <div className="lg:w-1/3">
                    <div className="static lg:sticky lg:top-32 mb-12 lg:mb-0">
                        {/* Status Indicator */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex items-center gap-3 mb-6 md:mb-8"
                        >
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E31E27]"></span>
                            </span>
                            <span className="font-sans text-white/60 text-xs md:text-sm font-semibold tracking-widest uppercase">
                                วาระแห่งชาติ
                            </span>
                        </motion.div>
                        
                        {/* Big Headline */}
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight mb-6">
                            สงคราม <br/>
                            <span className="text-[#E31E27]">ปราบโกง</span>
                        </h2>
                        
                        <div className="w-20 h-1 bg-[#E31E27] mb-8"></div>

                        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-10">
                            ภารกิจเร่งด่วนในการกวาดล้างสิ่งผิดกฎหมาย ปฏิรูประบบราชการ และคืนความยุติธรรมสู่สังคมไทยด้วยเทคโนโลยีและความโปร่งใส
                        </p>

                        {/* Key Stat Metrics */}
                        <div className="grid grid-cols-2 gap-4 md:gap-6 border-t border-white/10 pt-8">
                             <div>
                                <div className="flex items-center gap-2 text-gray-500 mb-2">
                                    <Activity size={14} /> <span className="text-[10px] md:text-xs uppercase tracking-wider">คดีที่กำลังดำเนินการ</span>
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-white">2,540+</div>
                             </div>
                             <div>
                                <div className="flex items-center gap-2 text-gray-500 mb-2">
                                    <ShieldAlert size={14} /> <span className="text-[10px] md:text-xs uppercase tracking-wider">ทรัพย์สินที่ยึดคืน</span>
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-white">5.2พันล้าน</div>
                             </div>
                             <div>
                                <div className="flex items-center gap-2 text-gray-500 mb-2">
                                    <Scale size={14} /> <span className="text-[10px] md:text-xs uppercase tracking-wider">อัตราการดำเนินคดี</span>
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-white">98%</div>
                             </div>
                             <div>
                                <div className="flex items-center gap-2 text-gray-500 mb-2">
                                    <FileText size={14} /> <span className="text-[10px] md:text-xs uppercase tracking-wider">การเปิดเผยข้อมูล</span>
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT PANEL: Strategic Reports (Clean List) --- */}
                <div className="lg:w-2/3 lg:pt-8">
                     {WAR_STRATEGIES.map((war, index) => (
                        <StrategyCard 
                            key={war.id} 
                            strategy={war} 
                            index={index} 
                            onClick={() => setSelectedStrategy(war)}
                        />
                     ))}
                     
                     {/* Bottom Call to Action area in list */}
                     <div className="mt-8 md:mt-12 p-6 md:p-8 bg-[#E31E27]/10 border border-[#E31E27]/30 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                        <div>
                            <h4 className="text-lg md:text-xl font-bold text-[#E31E27] mb-1">ช่องทางแจ้งเบาะแส</h4>
                            <p className="text-sm text-gray-400">แจ้งเบาะแสการทุจริตอย่างปลอดภัย ข้อมูลของคุณจะถูกเก็บเป็นความลับ</p>
                        </div>
                        <button className="w-full md:w-auto bg-[#E31E27] hover:bg-red-700 text-white px-6 py-3 rounded font-bold transition-colors whitespace-nowrap">
                            แจ้งเบาะแส
                        </button>
                     </div>
                </div>

            </div>
        </div>

        {/* Full Page Detail View */}
        {selectedStrategy && (
             <WarStrategyDetail 
                strategy={selectedStrategy} 
                onClose={() => setSelectedStrategy(null)} 
            />
        )}
    </section>
  );
};

export default WarRoom;