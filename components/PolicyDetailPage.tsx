import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Share2, Facebook, Twitter, Link as LinkIcon, Copy } from 'lucide-react';
import { EconomicPrinciple } from '../types';
import { ICONS_MAP } from '../constants';

interface Props {
  policy: EconomicPrinciple;
  onBack: () => void;
}

const PolicyDetailPage: React.FC<Props> = ({ policy, onBack }) => {
  const Icon = ICONS_MAP[policy.icon] || ICONS_MAP.zap;
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll the OVERLAY content to top when mounted, NOT the window
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[100] bg-white overflow-y-auto custom-scrollbar"
      style={{ willChange: 'transform' }}
    >
      {/* Navigation Bar */}
      <div className="sticky top-0 left-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-100 z-50 px-4 md:px-8 py-4 flex justify-between items-center supports-[backdrop-filter]:bg-white/80">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-ptNavy font-bold hover:text-ptRed transition-colors bg-gray-100/50 hover:bg-red-50 px-5 py-2.5 rounded-full transition-all duration-300"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>ย้อนกลับ</span>
        </button>
        <div className="flex gap-2">
           <button className="p-3 text-gray-400 hover:text-ptNavy rounded-full hover:bg-gray-100 transition-colors">
              <Share2 size={20} />
           </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pb-24">
        {/* Header Section */}
        <div className="px-6 pt-10 md:pt-20 pb-12 text-center">
            <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex p-6 bg-gradient-to-br from-gray-50 to-white rounded-[2rem] text-ptNavy mb-8 shadow-lg border border-gray-100"
            >
                <Icon size={64} strokeWidth={1} className="text-ptRed" />
            </motion.div>
            
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center gap-3 mb-8 flex-wrap"
            >
                {policy.tags?.map((tag, i) => (
                    <span key={i} className="bg-white text-ptNavy px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-gray-200 shadow-sm">
                        {tag}
                    </span>
                ))}
            </motion.div>

            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl md:leading-tight font-black text-ptNavy mb-8 tracking-tight"
            >
                {policy.title}
            </motion.h1>
            
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-500 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto"
            >
                {policy.description}
            </motion.p>
        </div>

        {/* Feature Image / Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

        {/* Content Body */}
        <div className="px-6 md:px-12 mb-24">
            <article className="prose prose-xl max-w-none prose-headings:font-bold prose-headings:text-ptNavy prose-headings:tracking-tight prose-p:text-gray-600 prose-p:leading-8 prose-strong:text-ptNavy prose-li:marker:text-ptRed prose-img:rounded-[2rem] prose-img:shadow-xl">
                {policy.fullContent ? (
                    <div dangerouslySetInnerHTML={{ __html: policy.fullContent }} />
                ) : (
                    <div className="text-center py-20 text-gray-400 bg-gray-50 rounded-[2.5rem] border border-dashed border-gray-200">
                        <p className="text-lg">อยู่ระหว่างการอัปเดตรายละเอียดเพิ่มเติม</p>
                    </div>
                )}
            </article>
        </div>

        {/* Footer / CTA Section - Premium Redesign */}
        <div className="mx-4 md:mx-12">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#003366] to-[#001a33] p-8 md:p-16 text-center shadow-2xl shadow-blue-900/20 border border-white/10 group">
                
                {/* Animated Background Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#E31E27] rounded-full blur-[120px] opacity-20 -mr-32 -mt-32 pointer-events-none group-hover:opacity-30 transition-opacity duration-700 mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-10 -ml-20 -mb-20 pointer-events-none mix-blend-screen"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight drop-shadow-lg">
                        เห็นด้วยกับนโยบายนี้?
                    </h3>
                    <div className="w-20 h-1.5 bg-[#E31E27] mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(227,30,39,0.5)]"></div>
                    
                    <p className="text-blue-100/90 text-lg md:text-xl font-light mb-12 leading-relaxed">
                        ร่วมเป็นส่วนหนึ่งในการผลักดันให้เกิดขึ้นจริง <br className="hidden md:block"/>
                        แชร์นโยบายนี้เพื่อสร้างการเปลี่ยนแปลงไปด้วยกัน
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-3xl mx-auto">
                        {/* Facebook Button */}
                        <button className="flex-1 bg-white text-[#1877F2] px-6 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 flex items-center justify-center gap-3 group/btn relative overflow-hidden">
                             <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                             <div className="relative flex items-center gap-2">
                                <Facebook size={24} fill="currentColor" /> 
                                <span>Share</span>
                             </div>
                        </button>
                        
                        {/* Twitter Button */}
                        <button className="flex-1 bg-[#1DA1F2] text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-[#1a91da] hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-400/20 transition-all duration-300 flex items-center justify-center gap-3 group/btn">
                            <Twitter size={24} fill="currentColor" /> 
                            <span>Tweet</span>
                        </button>
                        
                        {/* Copy Link Button */}
                        <button className="flex-1 bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:border-white/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group/btn">
                            <LinkIcon size={24} /> 
                            <span>Copy Link</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PolicyDetailPage;