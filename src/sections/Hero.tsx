import { motion } from 'framer-motion';
import { SocialLinks } from '../components/SocialLinks';
import { useTypewriter } from '../hooks/useTypewriter';
import type { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData;
}

export const Hero = ({ data }: HeroProps) => {
  const typedText = useTypewriter(data.roles);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_25%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {data.name}
          </h1>
          <p className="mt-4 min-h-[40px] text-xl font-semibold text-cyan-300 sm:text-2xl">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{data.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={data.resumeFile}
              download
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:scale-105 hover:border-cyan-400/40"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8">
            <SocialLinks socials={data.socials} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-md"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-2xl">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-4">
              <img
                src={data.profileImage}
                alt={data.name}
                className="mx-auto aspect-square w-full max-w-sm rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};