import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-slate-950"
    >
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
          className="h-4 w-4 rounded-full bg-cyan-400"
        />
        <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Loading</p>
      </div>
    </motion.div>
  );
};