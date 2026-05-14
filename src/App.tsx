import { useEffect, useMemo, useState } from 'react';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Resume } from './sections/Resume';
import { Skills } from './sections/Skills';
import { navItems, portfolioData } from './data/portfolioData';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = `${portfolioData.name} | ${portfolioData.title}`;
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      {isLoading ? <Loader /> : null}

      <Navbar
        name={portfolioData.name}
        navItems={navItems}
        activeSection={activeSection}
        isOpen={menuOpen}
        onToggle={() => setMenuOpen((prev) => !prev)}
      />

      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills data={portfolioData} />
        <Projects data={portfolioData} />
        <Resume data={portfolioData} />
        <Contact data={portfolioData} />
      </main>

      <Footer name={portfolioData.name} />
      <ScrollToTop />
    </div>
  );
}

export default App;