import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
  }`;

  const textClass = isScrolled ? 'text-ptNavy' : 'text-white';
  
  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center cursor-pointer">
           <img 
             src={LOGO_URL} 
             alt="Pheu Thai Party Logo" 
             className={`h-10 md:h-12 w-auto transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'}`}
           />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {['นโยบาย', 'เศรษฐกิจ', 'ผลงาน', 'ข่าวสาร'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`text-lg font-medium hover:text-ptRed transition-colors ${textClass}`}
            >
              {item}
            </a>
          ))}
          <button className="bg-ptRed hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-red-500/30">
            สมัครสมาชิก
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={textClass}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 text-ptNavy">
              {['นโยบาย', 'เศรษฐกิจ', 'ผลงาน', 'ข่าวสาร'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-xl font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-ptRed text-white w-full py-3 rounded-xl font-bold">
                สมัครสมาชิก
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;