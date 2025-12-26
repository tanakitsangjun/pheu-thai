import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GDP_DATA } from '../constants';
import { Wallet, TrendingUp, Activity, Globe, Landmark, ArrowUpRight, Zap, Users } from 'lucide-react';

const TickerItem: React.FC<{ label: string; value: string; change: string }> = ({ label, value, change }) => (
  <div className="flex items-center gap-4 px-8 border-r border-gray-200/20 min-w-max">
    <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">{label}</span>
    <span className="text-white font-mono font-bold">{value}</span>
    <span className={`text-xs ${change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>{change}</span>
  </div>
);

const EconomySection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  useEffect(() => {
    const timer = setTimeout(() => {
        setMounted(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="เศรษฐกิจ" className="relative bg-[#F8F9FA] overflow-hidden font-sans">
      
      {/* --- STOCK TICKER (Top Bar) --- */}
      <div className="w-full bg-[#0a0a0a] py-3 overflow-hidden border-b border-white/10 z-20 relative">
        <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex whitespace-nowrap"
        >
            {[...Array(2)].map((_, i) => (
                <div key={i} className="flex">
                    <TickerItem label="เป้าหมาย GDP" value="5.0%" change="+1.2%" />
                    <TickerItem label="ค่าแรงขั้นต่ำ" value="600 บาท" change="+Target" />
                    <TickerItem label="เงินดิจิทัล" value="10,000 บาท" change="พร้อม" />
                    <TickerItem label="ดัชนีหุ้นไทย" value="1,650.00" change="+12.5" />
                    <TickerItem label="การส่งออก" value="$2.8แสนล้าน" change="+5.5%" />
                    <TickerItem label="ท่องเที่ยว" value="40ล้านคน" change="+20%" />
                </div>
            ))}
        </motion.div>
      </div>

      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute w-full h-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.4]"></div>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10 max-w-7xl">
        
        {/* --- COMPACT HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-200 pb-6">
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-2"
                >
                    <div className="w-2 h-2 bg-[#E31E27] rounded-full"></div>
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">เกาะติดเศรษฐกิจ</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#003366] tracking-tight">
                    พลิกฟื้น <span className="text-[#E31E27] italic">เศรษฐกิจไทย</span>
                </h2>
            </div>
            <div className="text-right hidden md:block">
                <p className="text-gray-400 text-sm">อัปเดตข้อมูลล่าสุด</p>
                <p className="text-[#003366] font-mono font-bold">{new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric'})}</p>
            </div>
        </div>

        {/* --- DASHBOARD GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Col: Digital Wallet (Hero Stat) */}
            <div className="lg:col-span-8 grid grid-cols-1 gap-6">
                
                {/* Main Featured Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#003366] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>

                    <div className="relative z-10 flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Wallet className="text-blue-300" size={24} />
                            <span className="text-blue-200 font-mono text-xs uppercase tracking-widest border border-blue-500/30 px-2 py-0.5 rounded">นโยบายเรือธง</span>
                        </div>
                        <h3 className="text-3xl font-bold mb-1">เงินดิจิทัล</h3>
                        <p className="text-blue-100/70 text-sm max-w-md">
                            เติมเงิน 10,000 บาท ผ่าน Digital Wallet กระตุ้นเศรษฐกิจครั้งใหญ่ กระจายรายได้สู่ชุมชนทั่วประเทศ
                        </p>
                    </div>

                    <div className="relative z-10 text-right">
                        <div className="text-[4rem] md:text-[5rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">
                            10,000<span className="text-2xl md:text-3xl text-blue-300 ml-1">฿</span>
                        </div>
                        <div className="flex items-center justify-end gap-4 mt-2">
                             <div className="text-xs text-blue-300 font-mono">
                                เม็ดเงินหมุนเวียน <br/> <span className="text-white text-lg font-bold">5 แสนล้าน</span>
                             </div>
                             <div className="w-px h-8 bg-white/20"></div>
                             <div className="text-xs text-blue-300 font-mono">
                                ผู้ได้รับสิทธิ์ <br/> <span className="text-white text-lg font-bold">50 ล้านคน+</span>
                             </div>
                        </div>
                    </div>
                </motion.div>

                {/* Secondary Stats Row (Replaces Big Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Soft Power Compact */}
                    <motion.div whileHover={{ y: -2 }} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-32">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">Soft Power</div>
                                <div className="text-2xl font-black text-[#E31E27]">20 ล้าน <span className="text-xs text-gray-400 font-normal">ตำแหน่งงาน</span></div>
                            </div>
                            <Globe size={20} className="text-gray-300" />
                        </div>
                        <div className="w-full bg-gray-100 h-1.5 rounded-full mt-auto overflow-hidden">
                            <div className="bg-[#E31E27] w-3/4 h-full rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Wage Compact */}
                    <motion.div whileHover={{ y: -2 }} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-32">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">ค่าแรงขั้นต่ำ</div>
                                <div className="text-2xl font-black text-[#003366]">600 <span className="text-xs text-gray-400 font-normal">บาท</span></div>
                            </div>
                            <Users size={20} className="text-gray-300" />
                        </div>
                        <div className="flex items-center gap-2 mt-auto">
                            <span className="text-xs font-bold text-green-500 bg-green-50 px-1.5 py-0.5 rounded">+45%</span>
                            <span className="text-[10px] text-gray-400">เทียบปัจจุบัน</span>
                        </div>
                    </motion.div>

                    {/* Grad Salary Compact */}
                    <motion.div whileHover={{ y: -2 }} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-32">
                         <div className="flex justify-between items-start">
                            <div>
                                <div className="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">เงินเดือน ป.ตรี</div>
                                <div className="text-2xl font-black text-[#003366]">25,000 <span className="text-xs text-gray-400 font-normal">บาท</span></div>
                            </div>
                            <Landmark size={20} className="text-gray-300" />
                        </div>
                         <div className="flex items-center gap-2 mt-auto">
                            <span className="text-xs font-bold text-green-500 bg-green-50 px-1.5 py-0.5 rounded">เป้าหมายปี 70</span>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Right Col: GDP Chart (Vertical Dashboard) */}
            <div className="lg:col-span-4 flex flex-col h-full">
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg h-full flex flex-col"
                >
                    <div className="mb-6">
                        <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">
                            <Activity size={14} /> แนวโน้ม GDP
                        </div>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-4xl font-black text-[#003366]">5.0%</h3>
                            <span className="text-sm text-green-500 font-bold flex items-center"><TrendingUp size={14} className="mr-1"/> การเติบโต</span>
                        </div>
                    </div>

                    <div className="flex-1 w-full min-h-[180px]">
                        {mounted && (
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={GDP_DATA}>
                            <defs>
                                <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#003366" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#003366" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                            <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 10}} dy={10} />
                            <Tooltip 
                                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                itemStyle={{ color: '#003366', fontWeight: 'bold' }}
                            />
                            <Area type="monotone" dataKey="target" stroke="#003366" strokeWidth={2} fill="url(#colorTarget)" />
                            </AreaChart>
                        </ResponsiveContainer>
                        )}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <span>ปัจจุบัน: 1.9%</span>
                            <span>เป้าหมาย: 5.0%</span>
                        </div>
                        <div className="w-full bg-gray-100 h-1 mt-2 rounded-full overflow-hidden">
                             <div className="bg-[#003366] w-2/5 h-full rounded-full"></div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default EconomySection;