import { SocialLinks } from './SocialLinks';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  name: string;
}

export const Footer = ({ name }: FooterProps) => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 px-4 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <SocialLinks socials={portfolioData.socials} />
      </div>
    </footer>
  );
};