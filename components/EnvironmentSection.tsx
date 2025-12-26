import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wind, TrainFront, Droplets, Sprout, ArrowRight, ShieldCheck, Waves, TrendingDown, MapPin } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Defs, LinearGradient, Stop, Tooltip, CartesianGrid } from 'recharts';
import { ECONOMIC_PRINCIPLES } from '../constants';

const EnvironmentSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  
  // Get updated content descriptions
  const pm25Policy = ECONOMIC_PRINCIPLES.find(p => p.id === 'e7');
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Data for Area Charts
  const CHIANGMAI_DATA = [
    { year: '2562', val: 100 }, 
    { year: '2563', val: 85 }, 
    { year: '2564', val: 60 }, 
    { year: '2565', val: 45 }, 
    { year: '2566', val: 30 }, 
    { year: '2567', val: 50 } // Percentage relative to base year
  ];
  
  const BKK_DATA = [
    { year: 'ม.ค.', val: 90 }, 
    { year: 'ก.พ.', val: 80 }, 
    { year: 'มี.ค.', val: 75 }, 
    { year: 'เม.ย.', val: 60 }, 
    { year: 'พ.ค.', val: 50 }, 
    { year: 'มิ.ย.', val: 70 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-lg border border-emerald-100 text-xs">
          <p className="font-bold text-ptNavy mb-1">{label}</p>
          <p className="text-emerald-600 font-semibold">
            ค่าฝุ่น: {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="relative bg-[#F0FDF4] py-0 overflow-hidden text-ptNavy min-h-screen flex flex-col justify-center">
        
        {/* --- DECORATIVE LAYERS --- */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 transform -translate-y-1">
             <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#050505]"></path>
            </svg>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
             <div className="absolute -right-20 top-1/4 opacity-5 text-emerald-800 transform rotate-12 scale-150">
                <Sprout size={600} strokeWidth={0.5} />
             </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20 pb-16 md:pt-32 md:pb-24">
            
            {/* --- HEADER --- */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
            >
                <div className="inline-flex items-center gap-2 bg-emerald-100/80 backdrop-blur-md text-emerald-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-emerald-200">
                    <Wind size={16} /> ยุทธศาสตร์ฟ้าใส
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-ptNavy tracking-tight">
                    วาระแห่งชาติ <span className="italic text-emerald-600">ลมหายใจสะอาด</span>
                </h2>
                <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                    แก้ปัญหา PM 2.5 ครบวงจร และสร้างระบบขนส่งที่เป็นมิตรต่อสิ่งแวดล้อม
                </p>
            </motion.div>

            {/* --- BENTO GRID LAYOUT --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
                
                {/* 1. Large Card: PM 2.5 (Clean Air Act) */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-emerald-900/5 border border-emerald-50 relative overflow-hidden group flex flex-col justify-between min-h-[450px]"
                >
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-emerald-50 via-emerald-50/30 to-transparent rounded-full -mr-20 -mt-20 z-0"></div>
                    
                    <div className="relative z-10 mb-8">
                        <div className="flex justify-between items-start mb-6">
                            <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-600">
                                <Wind size={28} />
                            </div>
                            <div className="bg-emerald-50 px-3 py-1 rounded-lg text-xs font-bold text-emerald-700 uppercase tracking-wider">ตัวชี้วัด: คุณภาพอากาศ</div>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-ptNavy mb-3">{pm25Policy?.title}</h3>
                        <p className="text-gray-500 font-light text-lg max-w-lg leading-relaxed">
                            {pm25Policy?.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                        {/* Chart 1: Chiang Mai */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1 uppercase tracking-wider font-semibold">
                                        <MapPin size={12} /> เชียงใหม่
                                    </div>
                                    <div className="text-3xl font-black text-emerald-600 flex items-center gap-2">
                                        -50%
                                        <span className="bg-emerald-100 text-emerald-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold flex items-center">
                                            <TrendingDown size={10} className="mr-0.5" /> YoY
                                        </span>
                                    </div>
                                    <div className="text-[10px] text-gray-400 mt-1">จุดความร้อน (Hotspots) ลดลงต่อเนื่อง</div>
                                </div>
                            </div>
                            <div className="h-24 w-full -ml-2">
                                {mounted && (
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={CHIANGMAI_DATA}>
                                            <defs>
                                                <linearGradient id="colorEmerald" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#10b981', strokeWidth: 1, strokeDasharray: '4 4' }} />
                                            <Area 
                                                type="monotone" 
                                                dataKey="val" 
                                                stroke="#10b981" 
                                                strokeWidth={3} 
                                                fillOpacity={1} 
                                                fill="url(#colorEmerald)" 
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                )}
                            </div>
                        </div>

                        {/* Chart 2: Bangkok */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1 uppercase tracking-wider font-semibold">
                                        <MapPin size={12} /> กทม.
                                    </div>
                                    <div className="text-3xl font-black text-teal-600 flex items-center gap-2">
                                        -20%
                                        <span className="bg-teal-100 text-teal-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold flex items-center">
                                            <TrendingDown size={10} className="mr-0.5" /> YoY
                                        </span>
                                    </div>
                                    <div className="text-[10px] text-gray-400 mt-1">วันที่มีค่าฝุ่นเกินมาตรฐานลดลง</div>
                                </div>
                            </div>
                            <div className="h-24 w-full -ml-2">
                                {mounted && (
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={BKK_DATA}>
                                            <defs>
                                                <linearGradient id="colorTeal" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.3}/>
                                                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#0d9488', strokeWidth: 1, strokeDasharray: '4 4' }} />
                                            <Area 
                                                type="monotone" 
                                                dataKey="val" 
                                                stroke="#0d9488" 
                                                strokeWidth={3} 
                                                fillOpacity={1} 
                                                fill="url(#colorTeal)" 
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column Container */}
                <div className="md:col-span-1 flex flex-col gap-6">
                    
                    {/* 2. Top Right: 20 Baht Train (Redesigned) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex-1 bg-ptNavy rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden text-white group cursor-pointer hover:shadow-2xl hover:shadow-ptNavy/30 transition-all duration-500"
                    >
                         {/* Background: Transit Map Pattern */}
                         <div className="absolute inset-0 opacity-10 pointer-events-none">
                             <svg className="w-full h-full" viewBox="0 0 300 200">
                                 <path d="M-20 100 L 320 100" stroke="white" strokeWidth="15" fill="none" />
                                 <path d="M100 220 L 100 -20" stroke="white" strokeWidth="15" fill="none" opacity="0.5" />
                                 <circle cx="100" cy="100" r="20" fill="white" />
                             </svg>
                         </div>
                         
                         {/* Gradient overlay for depth */}
                         <div className="absolute inset-0 bg-gradient-to-t from-ptNavy via-transparent to-transparent z-0"></div>

                         <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-start">
                                <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-blue-200">
                                    คมนาคม 2568
                                </div>
                                {/* Ticket Price Badge */}
                                <div className="bg-ptRed text-white px-4 py-2 rounded-xl font-black shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-300 border-2 border-white/20 border-dashed">
                                   <span className="text-xl">20฿</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center gap-3 mb-2 text-blue-300">
                                    <TrainFront size={28} />
                                    <div className="h-[2px] flex-1 bg-blue-300/30 rounded-full overflow-hidden">
                                        <motion.div 
                                            animate={{ x: [-50, 200] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="h-full w-1/3 bg-blue-300"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-1 leading-none">รถไฟฟ้า 20 บาท</h3>
                                <p className="text-gray-300 text-sm font-light">
                                    ตลอดสาย ทุกสี ลดค่าครองชีพ
                                </p>
                            </div>
                         </div>
                    </motion.div>

                    {/* 3. Bottom Right: Smart Water (Redesigned) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden group text-white hover:scale-[1.02] transition-transform duration-300"
                    >
                         {/* Fluid Background Animation */}
                         <div className="absolute bottom-[-20%] left-[-10%] w-[120%] h-[120%] bg-white/10 rounded-[40%] animate-[spin_10s_linear_infinite] blur-3xl pointer-events-none"></div>
                         
                         <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                        <Droplets size={20} className="text-white" />
                                    </div>
                                    <span className="font-bold text-white/90 text-sm tracking-wide">บริหารจัดการน้ำ</span>
                                </div>
                                <div className="text-white/60">
                                    <Waves size={20} />
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-bold mb-2 leading-tight drop-shadow-md">
                                    ทั้งระบบ<br/>ครบวงจร
                                </h3>
                                <div className="flex gap-2 mt-3">
                                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-xs border border-white/10 flex items-center gap-1">
                                        <ShieldCheck size={12} /> ทางระบายน้ำ
                                    </span>
                                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-xs border border-white/10 flex items-center gap-1">
                                        <Sprout size={12} /> เกษตรแม่นยำ
                                    </span>
                                </div>
                            </div>
                         </div>
                    </motion.div>

                </div>
            </div>

            {/* --- BOTTOM GRADIENT FADE --- */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
    </section>
  );
};

export default EnvironmentSection;