import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown, Train, TrendingUp, Zap } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Hero: React.FC = () => {
  const scrollToPolicy = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('นโยบาย');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#1a0000] flex flex-col items-center justify-start">
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#500000] via-[#1a0000] to-[#000000] z-0" />
      
      {/* 2. Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 pointer-events-none mix-blend-overlay"></div>
      
      {/* 3. City Skyline */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[65vh] z-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2600&auto=format&fit=crop')",
          backgroundPosition: 'bottom center',
          backgroundSize: 'cover',
          maskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 100%)'
        }}
      />

      {/* 4. 3D Perspective Grid Floor */}
      <div className="absolute bottom-0 left-0 w-full h-[45vh] z-0 perspective-[1000px] pointer-events-none opacity-30">
         <div className="relative w-[200%] h-[150%] -ml-[50%] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)] origin-bottom fade-mask"></div>
      </div>

      {/* --- CONTENT --- */}

      {/* Top Nav (Logo) */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-start">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group cursor-pointer"
        >
            <div className="absolute -inset-4 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img 
                src={LOGO_URL} 
                alt="Pheu Thai Logo" 
                className="relative h-12 md:h-16 w-auto brightness-0 invert drop-shadow-md transition-transform hover:scale-105" 
            />
        </motion.div>
      </div>

      {/* Main Container */}
      <div className="relative z-30 container mx-auto px-4 flex flex-col items-center h-full pt-28 md:pt-32">
        
        <div className="flex flex-col items-center w-full max-w-6xl">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col items-center text-center gap-3 mb-2"
            >
                <p className="text-white/80 text-sm md:text-xl font-light tracking-wider">
                    "เลือกตั้งครั้งนี้ เลือก<span className="font-medium text-white border-b border-[#E31E27] mx-1">ทิศทางประเทศ</span>"
                </p>
                <h1 className="text-2xl md:text-4xl font-bold text-white tracking-wide drop-shadow-lg mt-1">
                    พรรคเพื่อไทย
                </h1>
            </motion.div>

            {/* Slogan */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col items-center relative z-10"
            >
                <h2 className="text-[5.5rem] sm:text-[8rem] md:text-[11rem] lg:text-[13rem] leading-[0.9] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 drop-shadow-2xl tracking-tighter mix-blend-overlay py-2">
                    เราพร้อม
                </h2>
                
                <div className="transform -rotate-2 -mt-2 md:-mt-8 hover:rotate-0 transition-transform duration-300 z-20 relative">
                    <span className="bg-[#E31E27] text-white text-3xl md:text-6xl font-extrabold px-8 py-3 md:px-16 md:py-6 skew-x-[-12deg] inline-block shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-white/10 ring-4 ring-red-900/30">
                        มากที่สุด
                    </span>
                </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 w-full justify-center max-w-md sm:max-w-none px-6 z-30"
            >
                <button 
                    onClick={scrollToPolicy}
                    className="group bg-white text-[#E31E27] px-8 py-4 rounded-full font-bold text-lg md:text-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px]"
                >
                    ดูนโยบาย
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-full font-medium text-white border border-white/30 bg-black/20 hover:bg-white/10 hover:border-white transition-all backdrop-blur-md text-lg md:text-xl w-full sm:w-auto min-w-[200px]">
                    สมัครสมาชิกพรรค
                </button>
            </motion.div>

            {/* Quick Stats Row */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12 md:mt-16 grid grid-cols-3 gap-6 md:gap-16 border-t border-white/10 pt-8 max-w-2xl w-full"
            >
                <div className="text-center group cursor-pointer hover:-translate-y-1 transition-transform">
                    <div className="flex justify-center mb-2 text-[#E31E27]"><Train size={28} /></div>
                    <div className="text-white font-bold text-xl md:text-3xl">20฿</div>
                    <div className="text-white/50 text-xs md:text-sm uppercase tracking-wide group-hover:text-white/80 transition-colors">รถไฟฟ้าตลอดสาย</div>
                </div>
                <div className="text-center group cursor-pointer hover:-translate-y-1 transition-transform border-x border-white/10">
                    <div className="flex justify-center mb-2 text-[#E31E27]"><TrendingUp size={28} /></div>
                    <div className="text-white font-bold text-xl md:text-3xl">+5%</div>
                    <div className="text-white/50 text-xs md:text-sm uppercase tracking-wide group-hover:text-white/80 transition-colors">GDP Target</div>
                </div>
                <div className="text-center group cursor-pointer hover:-translate-y-1 transition-transform">
                    <div className="flex justify-center mb-2 text-[#E31E27]"><Zap size={28} /></div>
                    <div className="text-white font-bold text-xl md:text-3xl">Soft Power</div>
                    <div className="text-white/50 text-xs md:text-sm uppercase tracking-wide group-hover:text-white/80 transition-colors">Global Impact</div>
                </div>
            </motion.div>

        </div>
      </div>

      {/* Red-Black Gradient Floor */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-[#500000] to-transparent z-20 pointer-events-none flex items-end justify-center pb-8 opacity-90">
        <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white/90 drop-shadow-[0_0_15px_rgba(227,30,39,0.6)] cursor-pointer hover:text-[#E31E27] transition-colors pointer-events-auto"
        >
            <ChevronDown size={40} strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;