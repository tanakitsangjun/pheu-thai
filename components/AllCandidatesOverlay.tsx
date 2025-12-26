import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Filter, Facebook, Twitter, X, MapPin, ChevronDown, Building, Home, Briefcase } from 'lucide-react';
import { CANDIDATES } from '../constants';

const CATEGORIES = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'executive', label: 'คณะผู้บริหาร' },
  { id: 'mp', label: 'สส. แบ่งเขต' },
  { id: 'economic', label: 'ทีมเศรษฐกิจ' },
  { id: 'strategy', label: 'ทีมยุทธศาสตร์' },
];

const LOCATIONS: Record<string, any> = {
    "กรุงเทพมหานคร": {
      "เขตลาดกระบัง": ["แขวงลาดกระบัง", "แขวงคลองสองต้นนุ่น", "แขวงคลองสามประเวศ"],
      "เขตห้วยขวาง": ["แขวงห้วยขวาง", "แขวงบางกะปิ", "แขวงสามเสนนอก"],
      "เขตจตุจักร": ["แขวงจตุจักร", "แขวงลาดยาว", "แขวงเสนานิคม"],
    },
    "เชียงใหม่": {
      "อำเภอเมือง": ["ตำบลศรีภูมิ", "ตำบลพระสิงห์", "ตำบลหายยา"],
      "อำเภอแม่ริม": ["ตำบลริมใต้", "ตำบลริมเหนือ", "ตำบลสันโป่ง"]
    },
    "ขอนแก่น": {
        "อำเภอเมือง": ["ตำบลในเมือง", "ตำบลพระลับ", "ตำบลเมืองเก่า"]
    }
};

interface Props {
  onClose: () => void;
}

const AllCandidatesOverlay: React.FC<Props> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
        containerRef.current.scrollTop = 0;
    }
  }, []);

  useEffect(() => {
    if (activeTab !== 'mp') {
        setProvince('');
        setDistrict('');
        setSubDistrict('');
    }
  }, [activeTab]);

  const filtered = CANDIDATES.filter(c => {
    const matchesTab = activeTab === 'all' || c.category === activeTab;
    let matchesSearch = true;
    if (activeTab === 'mp' && province) {
         matchesSearch = c.province === province;
         if (district && c.district) matchesSearch = matchesSearch && c.district === district;
    } else {
        matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        c.role.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return matchesTab && matchesSearch;
  });

  return (
    <motion.div
        ref={containerRef}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[100] bg-[#F3F4F6] overflow-y-auto custom-scrollbar font-sans"
    >
        {/* Sticky Navbar */}
        <div className="sticky top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 px-4 md:px-8 py-4 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-4">
                <button 
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <ArrowLeft size={24} className="text-[#003366]" />
                </button>
                <h2 className="text-xl font-bold text-[#003366]">ทำเนียบบุคลากร</h2>
            </div>
            
            <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-gray-500 uppercase">{filtered.length} PERSONS FOUND</span>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-8 max-w-[1600px]">
            
            {/* Filter Bar */}
            <div className="flex flex-col xl:flex-row gap-6 mb-8 items-start xl:items-center justify-between">
                
                {/* Tabs */}
                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all border ${
                                activeTab === tab.id 
                                ? 'bg-[#003366] text-white border-[#003366] shadow-lg shadow-blue-900/20' 
                                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-[#003366]'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Search / Filters */}
                <div className="w-full xl:w-auto flex gap-3">
                    {activeTab === 'mp' ? (
                        <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
                            <select 
                                value={province}
                                onChange={(e) => { setProvince(e.target.value); setDistrict(''); }}
                                className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium text-[#003366] focus:ring-2 focus:ring-[#003366]/20 focus:border-[#003366] outline-none min-w-[150px]"
                            >
                                <option value="">ทุกจังหวัด</option>
                                {Object.keys(LOCATIONS).map((p) => <option key={p} value={p}>{p}</option>)}
                            </select>
                             <select 
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                disabled={!province}
                                className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium text-[#003366] focus:ring-2 focus:ring-[#003366]/20 focus:border-[#003366] outline-none min-w-[150px] disabled:opacity-50"
                            >
                                <option value="">ทุกเขต/อำเภอ</option>
                                {province && LOCATIONS[province] && Object.keys(LOCATIONS[province]).map((d: string) => (
                                    <option key={d} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <div className="relative w-full xl:w-[300px]">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input 
                                type="text" 
                                placeholder="ค้นหาชื่อ..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/10 text-sm bg-white"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Grid Area - Smaller Cards, 5 Cols */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                <AnimatePresence>
                {filtered.map((person) => (
                    <motion.div 
                        key={person.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#E31E27]/30 hover:shadow-xl transition-all duration-300 group flex flex-col"
                    >
                        {/* Compact Image */}
                        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                             <img 
                                src={person.image} 
                                alt={person.name} 
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                             
                             {/* Category Badge on Top Left */}
                             <div className="absolute top-2 left-2">
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded shadow-sm border border-white/20 uppercase tracking-wide text-white ${
                                    person.category === 'executive' ? 'bg-[#E31E27]' : 'bg-[#003366]'
                                }`}>
                                    {CATEGORIES.find(c => c.id === person.category)?.label || 'Member'}
                                </span>
                             </div>

                             {/* Hover Socials */}
                             <div className="absolute bottom-3 right-3 flex gap-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                                <button className="bg-white/20 backdrop-blur text-white p-1.5 rounded-full hover:bg-[#1877F2] transition-colors"><Facebook size={14}/></button>
                                <button className="bg-white/20 backdrop-blur text-white p-1.5 rounded-full hover:bg-[#1DA1F2] transition-colors"><Twitter size={14}/></button>
                             </div>
                        </div>

                        {/* Info Section */}
                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">{person.name}</h3>
                            <p className="text-xs text-[#E31E27] font-semibold mb-2 line-clamp-1">{person.role}</p>
                            
                            <div className="mt-auto pt-3 border-t border-gray-100 flex items-start gap-2 text-xs text-gray-500">
                                <Briefcase size={12} className="shrink-0 mt-0.5" />
                                <span className="line-clamp-2 leading-tight">{person.expertise}</span>
                            </div>

                            {person.zone && (
                                <div className="mt-2 bg-gray-50 rounded px-2 py-1 flex items-center gap-1.5 text-[10px] text-gray-600 font-medium">
                                    <MapPin size={10} />
                                    <span className="truncate">{person.province} {person.zone}</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
                </AnimatePresence>
            </div>

            {/* Empty State */}
            {filtered.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                    <Filter size={48} className="mb-4 opacity-20" />
                    <p>ไม่พบรายชื่อที่ค้นหา</p>
                    <button 
                        onClick={() => {setSearchTerm(''); setProvince(''); setActiveTab('all');}}
                        className="mt-2 text-[#003366] font-bold text-sm hover:underline"
                    >
                        ล้างตัวกรองทั้งหมด
                    </button>
                </div>
            )}
        </div>
    </motion.div>
  );
}

export default AllCandidatesOverlay;