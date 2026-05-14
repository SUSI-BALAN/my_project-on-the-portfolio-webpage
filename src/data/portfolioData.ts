import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaXTwitter,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithubAlt
} from 'react-icons/fa6';
import { SiTypescript, SiTailwindcss, SiOwasp, SiBurpsuite } from 'react-icons/si';
import type { NavItem, PortfolioData } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
];

export const portfolioData: PortfolioData = {
  name: 'Tamilan',
  title: 'Frontend Developer',
  intro:
    'I build fast, elegant, and user-focused web experiences with React, TypeScript, and modern frontend tools.',
  about:
    'I am a developer focused on creating polished, scalable, and accessible web applications. I enjoy building responsive interfaces, integrating APIs, and learning modern full-stack technologies.',
  profileImage: '/profile.jpg',
  resumeFile: '/resume.pdf',
  roles: ['Frontend Developer', 'React Developer', 'Cyber Security Enthusiast'],
  contact: {
    email: 'yourmail@example.com',
    phone: '+91 9876543210',
    location: 'Karur, Tamil Nadu, India'
  },
  education: [
    {
      degree: 'B.Sc / B.Tech in Computer Science',
      institution: 'Your College Name',
      duration: '2022 - 2026',
      details: 'Focused on web development, databases, software engineering, and practical projects.'
    }
  ],
  experience: [
    {
      role: 'Frontend Developer',
      company: 'Freelance / Student Projects',
      duration: '2024 - Present',
      details:
        'Built portfolio websites, dashboards, and student-focused applications with React, Tailwind CSS, and TypeScript.'
    }
  ],
  socials: [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: FaLinkedin },
    { name: 'GitHub', url: 'https://github.com', icon: FaGithub },
    { name: 'Instagram', url: 'https://instagram.com', icon: FaInstagram },
    { name: 'Telegram', url: 'https://t.me', icon: FaTelegram },
    { name: 'X', url: 'https://x.com', icon: FaXTwitter }
  ],
  skills: [
    { name: 'HTML', icon: FaHtml5, category: 'Frontend' },
    { name: 'CSS', icon: FaCss3Alt, category: 'Frontend' },
    { name: 'JavaScript', icon: FaJs, category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
    { name: 'React', icon: FaReact, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
    { name: 'Node.js', icon: FaNodeJs, category: 'Backend' },
    { name: 'Git', icon: FaGitAlt, category: 'Tools' },
    { name: 'GitHub', icon: FaGithubAlt, category: 'Tools' },
    { name: 'OWASP ZAP', icon: SiOwasp, category: 'Security' },
    { name: 'Burp Suite', icon: SiBurpsuite, category: 'Security' }
  ],
  projects: [
    {
      title: 'Attendance Tracking System',
      description: 'A responsive attendance management platform for tracking and monitoring student records.',
      image: '/projects/project-1.jpg',
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      liveDemo: 'https://example.com',
      github: 'https://github.com'
    },
    {
      title: 'Trading Dashboard',
      description: 'A clean trading interface with market data, charts, and user-friendly analytics components.',
      image: '/projects/project-2.jpg',
      techStack: ['React', 'Vite', 'API Integration'],
      liveDemo: 'https://example.com',
      github: 'https://github.com'
    },
    {
      title: 'Cyber Security Toolkit',
      description: 'A project page showcasing security tools, testing workflows, and learning resources.',
      image: '/projects/project-3.jpg',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveDemo: 'https://example.com',
      github: 'https://github.com'
    }
  ]
};