import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LayoutTemplate, User } from 'lucide-react'; // Import icons for toggle
import Hero from './components/Hero';
import HeroCandidate from './components/HeroCandidate'; // Import new hero
import EconomySection from './components/EconomySection';
import PolicyGrid from './components/PolicyGrid';
import WarRoom from './components/WarRoom';
import Candidates from './components/Candidates';
import EnvironmentSection from './components/EnvironmentSection';
import VoiceSection from './components/VoiceSection';
import Footer from './components/Footer';
import PolicyDetailPage from './components/PolicyDetailPage';
import AllCandidatesOverlay from './components/AllCandidatesOverlay';
import { EconomicPrinciple } from './types';

const App: React.FC = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<EconomicPrinciple | null>(null);
  const [showAllCandidates, setShowAllCandidates] = useState(false);
  
  // State to toggle between 'standard' and 'candidate' hero layouts
  const [heroLayout, setHeroLayout] = useState<'standard' | 'candidate'>('standard');

  // Lock body scroll when policy detail or candidates overlay is open
  useEffect(() => {
    if (selectedPolicy || showAllCandidates) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [selectedPolicy, showAllCandidates]);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <main>
        {/* Hero Section Switcher */}
        <AnimatePresence mode="wait">
            {heroLayout === 'standard' ? (
                <Hero key="hero-standard" />
            ) : (
                <HeroCandidate key="hero-candidate" />
            )}
        </AnimatePresence>
        
        {/* Chapter 1: The Economic Foundation (Clean, Trustworthy) */}
        <div className="relative z-10 bg-white">
            <EconomySection />
            <div id="นโยบาย">
                <PolicyGrid onSelectPolicy={setSelectedPolicy} />
            </div>
        </div>

        {/* Chapter 2: The War on Corruption (Dark, Aggressive) */}
        <WarRoom />

        {/* Chapter 3: Sustainable Future (Fresh, Green) */}
        <EnvironmentSection />

        {/* Team Section (Preview Only) */}
        <Candidates onOpenAll={() => setShowAllCandidates(true)} />

        {/* Engagement */}
        <VoiceSection />
      </main>

      <Footer />

      {/* Floating Layout Toggle Button (Demo Purpose) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setHeroLayout(prev => prev === 'standard' ? 'candidate' : 'standard')}
        className="fixed bottom-6 left-6 z-50 bg-white/90 backdrop-blur text-ptNavy p-3 rounded-full shadow-xl border border-gray-200 flex items-center gap-2 pr-4 hover:bg-gray-50 transition-colors"
      >
        <div className={`p-2 rounded-full text-white transition-colors ${heroLayout === 'standard' ? 'bg-ptNavy' : 'bg-ptRed'}`}>
            {heroLayout === 'standard' ? <LayoutTemplate size={20} /> : <User size={20} />}
        </div>
        <div className="text-left hidden md:block">
            <div className="text-[10px] text-gray-500 font-bold uppercase">Change Layout</div>
            <div className="text-sm font-bold leading-none">{heroLayout === 'standard' ? 'Standard View' : 'Candidate View'}</div>
        </div>
      </motion.button>

      {/* Full Screen Policy Detail Page Overlay */}
      <AnimatePresence>
        {selectedPolicy && (
          <PolicyDetailPage 
            policy={selectedPolicy} 
            onBack={() => setSelectedPolicy(null)} 
          />
        )}
      </AnimatePresence>

      {/* Full Screen Candidates List Overlay */}
      <AnimatePresence>
        {showAllCandidates && (
          <AllCandidatesOverlay onClose={() => setShowAllCandidates(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;