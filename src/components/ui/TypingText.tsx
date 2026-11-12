import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export interface TypingTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursorClassName?: string;
}

export const TypingText: React.FC<TypingTextProps> = ({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1600,
  className = '',
  cursorClassName = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedText(words[wordIndex % words.length] ?? '');
      return;
    }

    const currentWord = words[wordIndex % words.length] ?? '';

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText === currentWord) {
      // Pause at the end of the word before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === '') {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Continue typing or deleting
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        const nextLength = isDeleting
          ? displayedText.length - 1
          : displayedText.length + 1;
        setDisplayedText(currentWord.slice(0, nextLength));
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime, shouldReduceMotion]);

  return (
    <span className={`inline-flex items-baseline font-mono ${className}`}>
      <span>{displayedText}</span>
      <span
        aria-hidden="true"
        className={`inline-block ml-0.5 text-lime-accent animate-cursor-blink ${cursorClassName}`}
      >
        _
      </span>
    </span>
  );
};
