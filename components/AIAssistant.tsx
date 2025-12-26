import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "เงินดิจิทัล 10,000 ได้วันไหน?",
  "ค่าแรง 600 บาท ปรับเมื่อไหร่?",
  "รถไฟฟ้า 20 บาท สายไหนบ้าง?",
  "Soft Power คืออะไร?"
];

// Mock AI Knowledge Base
const KNOWLEDGE_BASE: Record<string, string> = {
  "default": "ผมเป็นระบบช่วยตอบคำถามเบื้องต้น คุณสามารถเลือกคำถามจากเมนูแนะนำ หรือพิมพ์ค้นหานโยบายที่สนใจได้ครับ",
  "เงินดิจิทัล": "โครงการ Digital Wallet 10,000 บาท คาดว่าจะเริ่มใช้งานได้ในไตรมาส 4 ของปีนี้ครับ โดยจะแจกผ่าน Super App ให้กับประชาชนอายุ 16 ปีขึ้นไป (ตามเกณฑ์รายได้)",
  "ค่าแรง": "การปรับขึ้นค่าแรงขั้นต่ำเป็น 400 บาท นำร่องแล้วในปีนี้ และมีเป้าหมายสู่ 600 บาทภายในปี 2570 พร้อมมาตรการลดภาษีช่วย SME ครับ",
  "รถไฟฟ้า": "ปัจจุบันรถไฟฟ้า 20 บาทตลอดสาย นำร่องแล้วในสายสีม่วงและสีแดงครับ รัฐบาลกำลังเร่งผลักดัน พ.ร.บ.ตั๋วร่วม เพื่อขยายผลให้ครบทุกสีโดยเร็วที่สุด",
  "soft power": "นโยบาย 1 ครอบครัว 1 Soft Power (OFOS) มุ่งเน้นการ Upskill/Reskill คนไทย 20 ล้านคน เพื่อสร้างงานสร้างรายได้ผ่าน 11 อุตสาหกรรมสร้างสรรค์ครับ"
};

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: 'สวัสดีครับ 🙏 ผมคือ PT AI Assistant มีข้อสงสัยเกี่ยวกับนโยบายเรื่องไหน สอบถามได้เลยครับ',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    // Add User Message
    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newUserMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI Processing Time
    setTimeout(() => {
      let responseText = KNOWLEDGE_BASE['default'];
      const lowerText = text.toLowerCase();

      // Simple keyword matching
      if (lowerText.includes('เงิน') || lowerText.includes('digital') || lowerText.includes('wallet')) responseText = KNOWLEDGE_BASE['เงินดิจิทัล'];
      else if (lowerText.includes('ค่าแรง') || lowerText.includes('เงินเดือน')) responseText = KNOWLEDGE_BASE['ค่าแรง'];
      else if (lowerText.includes('รถไฟฟ้า') || lowerText.includes('20')) responseText = KNOWLEDGE_BASE['รถไฟฟ้า'];
      else if (lowerText.includes('soft') || lowerText.includes('power')) responseText = KNOWLEDGE_BASE['soft power'];

      const newBotMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-gradient-to-tr from-ptNavy to-blue-600 text-white'}`}
      >
        <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse"></div>
        <Bot size={32} />
        {/* Notification Badge */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-ptRed"></span>
        </span>
      </motion.button>

      {/* Chat Interface Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 font-sans"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-ptNavy to-blue-900 p-4 flex justify-between items-center text-white shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <Bot size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm">ผู้ช่วยอัจฉริยะ เพื่อไทย</h3>
                        <div className="flex items-center gap-1.5 text-xs text-blue-200">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            ออนไลน์ | ระบบ AI
                        </div>
                    </div>
                </div>
                <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 bg-gray-50 overflow-y-auto p-4 custom-scrollbar">
                <div className="space-y-4">
                    {messages.map((msg) => (
                        <motion.div 
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[80%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm ${
                                msg.sender === 'user' 
                                ? 'bg-ptRed text-white rounded-br-none' 
                                : 'bg-white text-gray-700 rounded-bl-none border border-gray-100'
                            }`}>
                                {msg.sender === 'bot' && (
                                    <div className="flex items-center gap-2 mb-1 text-xs font-bold text-ptRed/80 uppercase tracking-wider">
                                        <Sparkles size={10} /> คำตอบจาก AI
                                    </div>
                                )}
                                {msg.text}
                            </div>
                        </motion.div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start">
                             <div className="bg-white rounded-2xl rounded-bl-none p-4 shadow-sm border border-gray-100 flex gap-1">
                                 <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                 <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                                 <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                             </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Suggestions */}
            {!isTyping && messages.length < 3 && (
                <div className="px-4 py-2 bg-gray-50 flex gap-2 overflow-x-auto scrollbar-hide shrink-0">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                        <button 
                            key={i}
                            onClick={() => handleSend(q)}
                            className="whitespace-nowrap bg-white border border-blue-100 text-ptNavy text-xs font-medium px-3 py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-sm"
                        >
                            {q}
                        </button>
                    ))}
                </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
                <form 
                    onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                    className="flex gap-2 items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-ptNavy/50 focus-within:ring-2 focus-within:ring-ptNavy/10 transition-all"
                >
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="พิมพ์คำถามของคุณ..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-700 placeholder-gray-400"
                    />
                    <button 
                        type="submit"
                        disabled={!input.trim() || isTyping}
                        className="w-8 h-8 bg-ptNavy text-white rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-ptRed transition-colors shadow-md"
                    >
                        <Send size={14} />
                    </button>
                </form>
                <div className="text-[10px] text-center text-gray-400 mt-2">
                    พัฒนาโดย ศูนย์นวัตกรรมดิจิทัลเพื่อไทย
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;