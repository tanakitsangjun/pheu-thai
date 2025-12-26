import React from 'react';
import { motion } from 'framer-motion';
import { ECONOMIC_PRINCIPLES, ICONS_MAP } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { EconomicPrinciple } from '../types';

interface Props {
  onSelectPolicy: (policy: EconomicPrinciple) => void;
}

const PolicyGrid: React.FC<Props> = ({ onSelectPolicy }) => {
  return (
    <section className="bg-white relative border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 py-12 md:py-20">
            <div className="flex flex-col lg:flex-row gap-10 md:gap-16">
                
                {/* Sticky Header Side */}
                <div className="lg:w-1/3">
                    <div className="sticky top-32">
                        <div className="inline-block bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                            ภาพรวมยุทธศาสตร์
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-ptNavy mb-4 leading-tight">
                            10 เสาหลัก<br/>
                            <span className="text-ptRed">ฟื้นฟูโครงสร้าง</span>
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed mb-6">
                            ไม่ใช่แค่การแก้ปัญหาเฉพาะหน้า แต่คือการวางรากฐานใหม่ให้กับประเทศไทย เพื่อความมั่งคั่งที่ยั่งยืนและทั่วถึง
                        </p>
                        
                        {/* Decorative List */}
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-ptRed" /> ทันสมัยและแข่งขันได้จริง
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-ptRed" /> ลดความเหลื่อมล้ำ
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-ptRed" /> โปร่งใส ตรวจสอบได้
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Scrollable Content Side */}
                <div className="lg:w-2/3">
                    <div className="grid gap-4 md:gap-6">
                        {ECONOMIC_PRINCIPLES.map((principle, index) => {
                            const Icon = ICONS_MAP[principle.icon];
                            const hasDetails = !!principle.fullContent;
                            
                            return (
                                <motion.div
                                    key={principle.id}
                                    layoutId={`card-${principle.id}`}
                                    onClick={() => hasDetails && onSelectPolicy(principle)}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className={`group flex flex-col md:flex-row items-start gap-4 md:gap-6 p-5 md:p-8 rounded-2xl md:rounded-3xl transition-all duration-300 relative overflow-hidden ${
                                        hasDetails ? 'cursor-pointer active:scale-[0.99]' : ''
                                    } ${
                                        principle.highlight 
                                        ? 'bg-ptNavy text-white shadow-lg shadow-ptNavy/20' 
                                        : 'bg-white border border-gray-100 hover:border-red-100 hover:shadow-xl hover:-translate-y-1'
                                    }`}
                                >
                                    {/* --- DECORATIONS --- */}
                                    {!principle.highlight && (
                                        <>
                                            {/* Left Stripe: Expands on hover */}
                                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-ptRed to-ptNavy scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                                            
                                            {/* Top Right Corner Accent */}
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-50 group-hover:from-red-50 group-hover:opacity-100 transition-all duration-500"></div>
                                        </>
                                    )}

                                    {principle.highlight && (
                                        <>
                                            {/* Glowing orb for highlight card */}
                                            <div className="absolute -right-12 -top-12 w-48 h-48 bg-ptRed/30 blur-[60px] rounded-full group-hover:bg-ptRed/40 transition-colors duration-500"></div>
                                            <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-blue-500/20 blur-[60px] rounded-full"></div>
                                        </>
                                    )}

                                    {/* Icon */}
                                    <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 relative z-10 shadow-sm ${
                                        principle.highlight
                                        ? 'bg-white/10 text-white border border-white/10'
                                        : 'bg-gray-50 text-ptNavy group-hover:bg-ptRed group-hover:text-white group-hover:shadow-md group-hover:shadow-ptRed/20'
                                    }`}>
                                        <Icon size={24} strokeWidth={1.5} />
                                    </div>

                                    <div className="flex-1 relative z-10">
                                        <div className="flex justify-between items-start">
                                            <h3 className={`text-lg md:text-2xl font-bold mb-1 md:mb-2 transition-colors ${
                                                principle.highlight ? 'text-white' : 'text-ptNavy group-hover:text-ptRed'
                                            }`}>
                                                {principle.title}
                                            </h3>
                                            
                                            {/* Number Indicator */}
                                            <div className={`text-2xl md:text-4xl font-black absolute top-0 right-0 md:static transition-opacity duration-300 ${
                                                principle.highlight ? 'text-white/10' : 'text-gray-100 group-hover:text-gray-200'
                                            }`}>
                                                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                            </div>
                                        </div>

                                        {/* Tags for Highlight */}
                                        {principle.tags && (
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {principle.tags.map(tag => (
                                                    <span key={tag} className={`text-[10px] md:text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wider transition-colors ${
                                                        principle.highlight 
                                                        ? 'bg-white/20 text-white' 
                                                        : 'bg-gray-100 text-gray-500 group-hover:bg-ptRed/10 group-hover:text-ptRed'
                                                    }`}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <p className={`font-light text-sm md:text-base leading-relaxed transition-colors ${
                                            principle.highlight ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-600'
                                        }`}>
                                            {principle.description}
                                        </p>

                                        {hasDetails && (
                                            <div className={`mt-4 flex items-center text-sm font-bold uppercase tracking-wider gap-2 w-fit rounded-full transition-all duration-300 ${
                                                principle.highlight 
                                                ? 'bg-white/10 px-4 py-2 text-white hover:bg-white/20' 
                                                : 'bg-transparent text-ptRed opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                                            }`}>
                                                <span>อ่านรายละเอียด</span>
                                                <ArrowRight size={16} />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PolicyGrid;