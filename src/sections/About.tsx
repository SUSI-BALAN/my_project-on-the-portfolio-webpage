import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import type { PortfolioData } from '../types';

interface AboutProps {
  data: PortfolioData;
}

export const About = ({ data }: AboutProps) => {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Professional Summary"
          description="A quick overview of my background, education, and practical experience."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <img
              src={data.profileImage}
              alt={data.name}
              className="mx-auto aspect-square w-full max-w-xs rounded-[2rem] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid gap-6"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white">About Me</h3>
              <p className="mt-4 text-slate-300">{data.about}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">Education</h3>
                <div className="mt-4 space-y-4">
                  {data.education.map((item) => (
                    <div key={`${item.degree}-${item.institution}`}>
                      <h4 className="font-semibold text-cyan-300">{item.degree}</h4>
                      <p className="text-slate-200">{item.institution}</p>
                      <p className="text-sm text-slate-400">{item.duration}</p>
                      <p className="mt-2 text-sm text-slate-300">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">Experience</h3>
                <div className="mt-4 space-y-4">
                  {data.experience.map((item) => (
                    <div key={`${item.role}-${item.company}`}>
                      <h4 className="font-semibold text-cyan-300">{item.role}</h4>
                      <p className="text-slate-200">{item.company}</p>
                      <p className="text-sm text-slate-400">{item.duration}</p>
                      <p className="mt-2 text-sm text-slate-300">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};