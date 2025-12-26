import React from 'react';
import { Facebook, Twitter, Youtube, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ptNavy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-bold mb-6">พรรคเพื่อไทย</h2>
            <p className="text-gray-300 max-w-sm text-lg font-light">
              สถาบันทางการเมืองที่มุ่งมั่นทำงานเพื่อพี่น้องประชาชน สร้างเศรษฐกิจที่ดีและคุณภาพชีวิตที่มั่นคง
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-ptRed">เมนูหลัก</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">หน้าแรก</a></li>
              <li><a href="#" className="hover:text-white transition-colors">นโยบาย</a></li>
              <li><a href="#" className="hover:text-white transition-colors">บุคคลสำคัญ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">สมัครสมาชิก</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-ptRed">ติดต่อเรา</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-ptRed transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-ptRed transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-ptRed transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-ptRed transition-colors">
                <Globe size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              1770 ถนนเพชรบุรีตัดใหม่ แขวงบางกะปิ <br/>เขตห้วยขวาง กรุงเทพมหานคร 10310
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} พรรคเพื่อไทย สงวนลิขสิทธิ์</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">นโยบายความเป็นส่วนตัว</a>
            <a href="#" className="hover:text-white">ข้อกำหนดการใช้งาน</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;