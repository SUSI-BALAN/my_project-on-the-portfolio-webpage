import { useEffect, useState } from 'react';

export const useTypewriter = (words: string[], speed = 100, pause = 1400) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[index];
    let timeout: number;

    if (!deleting && subIndex === currentWord.length) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      timeout = window.setTimeout(() => undefined, 200);
    } else {
      timeout = window.setTimeout(() => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      }, deleting ? speed / 2 : speed);
    }

    return () => window.clearTimeout(timeout);
  }, [words, index, subIndex, deleting, speed, pause]);

  return `${words[index]?.substring(0, subIndex) ?? ''}`;
};