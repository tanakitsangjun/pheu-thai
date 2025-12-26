import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ChevronDown, Star } from 'lucide-react';
import { CANDIDATES, LOGO_URL } from '../constants';

const HeroCandidate: React.FC = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 100]); // Parallax image effect
  
  // Using Julapun (Index 2) as requested by the image link
  const candidate = CANDIDATES[2]; 

  const scrollToPolicy = () => {
    const element = document.getElementById('นโยบาย');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#1a0000] flex flex-col items-center justify-end font-sans">
      
      {/* --- BACKGROUND LAYERS (Matched to Ref 1: Red/Black Theme) --- */}
      
      {/* 1. Base Dark Red Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#600000] via-[#1a0000] to-[#000000] z-0" />
      
      {/* 2. Texture Overlay (Cubes) */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 pointer-events-none mix-blend-overlay"></div>
      
      {/* 3. City Skyline (Subtle Background) */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[65vh] z-0 pointer-events-none opacity-30 mix-blend-screen"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2600&auto=format&fit=crop')",
          backgroundPosition: 'bottom center',
          backgroundSize: 'cover',
          maskImage: 'linear-gradient(to top, black 10%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 10%, transparent 100%)'
        }}
      />

      {/* --- LOGO (Top Left) --- */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between">
        <motion.img 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            src={LOGO_URL} 
            alt="Pheu Thai Logo" 
            className="h-10 md:h-14 w-auto brightness-0 invert drop-shadow-md" 
        />
      </div>

      {/* --- BACKGROUND BIG TYPOGRAPHY --- */}
      <div className="absolute top-[15%] w-full text-center z-10 pointer-events-none select-none">
        <h1 className="text-[16vw] md:text-[14vw] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent tracking-tighter uppercase">
            PHEU THAI
        </h1>
      </div>

      {/* --- CANDIDATE IMAGE (CENTER) --- */}
      <motion.div 
        style={{ y: yImage }}
        initial={{ opacity: 0, scale: 1.1, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // Reduced height from 85vh to 65vh-75vh for better proportions
        className="relative z-20 h-[65vh] md:h-[75vh] w-full flex items-end justify-center pointer-events-none"
      >
         <img 
            src="https://www.ptp.or.th/wp-content/uploads/2020/05/03_%E0%B8%88%E0%B8%B8%E0%B8%A5%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C_%E0%B8%AD%E0%B8%A1%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B9%8C.jpg" 
            alt={candidate.name} 
            // Reduced max-width from 95%/80% to 85%/55%
            className="h-full w-auto max-w-[85%] md:max-w-[55%] object-cover object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            style={{
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }}
         />
      </motion.div>

      {/* --- BOTTOM CONTENT OVERLAY --- */}
      <div className="absolute bottom-0 left-0 w-full z-30 pt-32 pb-10 px-6 bg-gradient-to-t from-[#000000] via-[#000000]/90 to-transparent">
        <div className="container mx-auto flex flex-col items-center text-center">
            
            {/* Name & Role */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
            >
                {/* Tag */}
                <div className="inline-flex items-center gap-1 bg-[#E31E27] text-white text-xs md:text-sm font-bold px-3 py-1 rounded shadow-[0_0_15px_rgba(227,30,39,0.5)] mb-4">
                    <Star size={12} fill="currentColor" />
                    <span>แคนดิเดตนายกรัฐมนตรี</span>
                </div>

                {/* Name */}
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-2 leading-tight drop-shadow-xl tracking-tight">
                    {candidate.name}
                </h2>
                
                {/* Slogan/Role */}
                <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                    "คิดใหญ่ ทำเป็น เพื่อไทยทุกคน"
                </p>
            </motion.div>

            {/* --- ACTION BUTTONS (Exact Match to Ref 1) --- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md sm:max-w-none items-center"
            >
                {/* 1. Primary Button: White Pill, Red Text */}
                <button 
                    onClick={scrollToPolicy}
                    className="group bg-white text-[#E31E27] px-10 py-4 rounded-full font-bold text-xl md:text-2xl shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 w-full sm:w-auto min-w-[220px]"
                >
                    ดูนโยบาย <ChevronRight className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                </button>

                {/* 2. Secondary Button: Dark Transparent Pill, White Text */}
                <button className="px-10 py-4 rounded-full font-bold text-white border border-white/30 bg-black/40 hover:bg-white/10 hover:border-white transition-all backdrop-blur-md text-xl md:text-2xl w-full sm:w-auto min-w-[220px]">
                    สมัครสมาชิกพรรค
                </button>
            </motion.div>

        </div>
      </div>
      
      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/30 animate-pulse"
      >
        <ChevronDown size={28} />
      </motion.div>

    </section>
  );
};

export default HeroCandidate;