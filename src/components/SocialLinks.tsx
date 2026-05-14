import type { SocialLink } from '../types';

interface SocialLinksProps {
  socials: SocialLink[];
}

export const SocialLinks = ({ socials }: SocialLinksProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="group rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 backdrop-blur-md transition hover:scale-110 hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <Icon className="text-lg" />
          </a>
        );
      })}
    </div>
  );
};