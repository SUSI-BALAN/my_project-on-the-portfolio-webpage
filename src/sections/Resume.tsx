import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import type { PortfolioData } from '../types';

interface ResumeProps {
  data: PortfolioData;
}

export const Resume = ({ data }: ResumeProps) => {
  return (
    <section id="resume" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Resume"
          title="Resume Preview"
          description="Preview my resume directly on the page and download the latest version."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
            <iframe
              src={data.resumeFile}
              title="Resume Preview"
              className="h-[500px] w-full"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href={data.resumeFile}
              download
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};