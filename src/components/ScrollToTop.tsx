import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 rounded-full border border-white/10 bg-slate-900/80 p-4 text-white shadow-lg backdrop-blur-md transition hover:scale-110 hover:text-cyan-300"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};