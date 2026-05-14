import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import type { PortfolioData } from '../types';

interface SkillsProps {
  data: PortfolioData;
}

export const Skills = ({ data }: SkillsProps) => {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies and Tools"
          description="Core frontend, backend, version control, and security tools I work with."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-300">
                    <Icon className="text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <p className="text-sm text-slate-400">{skill.category}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};