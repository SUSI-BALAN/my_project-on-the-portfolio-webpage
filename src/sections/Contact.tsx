import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import type { PortfolioData } from '../types';

interface ContactProps {
  data: PortfolioData;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const Contact = ({ data }: ContactProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setStatus('sending');
      setErrorMessage('');

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      );

      setStatus('success');
      formRef.current.reset();

      window.setTimeout(() => {
        setStatus('idle');
      }, 4000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Work Together"
          description="Reach out using the details below or send a message through the contact form."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold text-white">Contact Details</h3>

            <div className="mt-6 space-y-4 text-slate-300">
              <p>
                <span className="font-semibold text-white">Email:</span> {data.contact.email}
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span> {data.contact.phone}
              </p>
              <p>
                <span className="font-semibold text-white">Location:</span> {data.contact.location}
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4 text-sm text-slate-300">
              Your message will be sent directly to my inbox using EmailJS.
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="grid gap-5">
              <div>
                <label htmlFor="from_name" className="mb-2 block text-sm font-medium text-slate-200">
                  Name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="reply_to" className="mb-2 block text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-200">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <input type="hidden" name="to_name" value={data.name} />
              <input type="hidden" name="to_email" value={data.contact.email} />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-sm font-medium text-emerald-400">
                  Message sent successfully.
                </p>
              )}

              {status === 'error' && (
                <p className="text-sm font-medium text-rose-400">
                  {errorMessage}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
