import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const VoiceSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`ขอบคุณสำหรับความคิดเห็น: ${email}`);
    setEmail('');
  };

  return (
    <section className="py-16 bg-ptGrey relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-ptRed rounded-full filter blur-[100px]"></div>
         <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-ptNavy rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-2xl text-center max-w-4xl mx-auto border border-gray-100">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-ptNavy mb-4 md:mb-6">
              เสียงของคุณ <span className="text-ptRed">คือพลังของเรา</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
              ร่วมเป็นส่วนหนึ่งในการขับเคลื่อนประเทศไทย ส่งต่อความคิดเห็นหรือข้อเสนอแนะเพื่อการพัฒนาที่ยั่งยืน
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="text"
                placeholder="แสดงความคิดเห็นของคุณที่นี่..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 md:px-8 md:py-4 rounded-full border border-gray-200 focus:outline-none focus:border-ptRed focus:ring-2 focus:ring-ptRed/20 text-base md:text-lg bg-gray-50"
              />
              <button 
                type="submit"
                className="bg-ptRed hover:bg-red-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-red-500/40 transition-all flex items-center justify-center gap-2"
              >
                ส่งข้อมูล <Send size={20} />
              </button>
            </form>
            
            <p className="mt-4 md:mt-6 text-xs text-gray-400">
              *ข้อมูลของท่านจะถูกเก็บเป็นความลับและนำไปใช้เพื่อการวิเคราะห์นโยบายเท่านั้น
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VoiceSection;