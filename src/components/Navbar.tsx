import { AnimatePresence, motion } from 'framer-motion';
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2';
import type { NavItem } from '../types';

interface NavbarProps {
  name: string;
  navItems: NavItem[];
  activeSection: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const Navbar = ({
  name,
  navItems,
  activeSection,
  isOpen,
  onToggle
}: NavbarProps) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-5 py-3 shadow-lg backdrop-blur-xl">
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 font-bold text-white">
            {name.charAt(0)}
          </span>
          <div className="text-left">
            <p className="text-base font-semibold text-white">{name}</p>
            <p className="text-xs text-slate-400">Portfolio</p>
          </div>
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeSection === item.id
                  ? 'bg-white text-slate-950'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={onToggle}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiXMark size={24} /> : <HiBars3BottomRight size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    onToggle();
                  }}
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-medium ${
                    activeSection === item.id
                      ? 'bg-white text-slate-950'
                      : 'bg-white/5 text-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};