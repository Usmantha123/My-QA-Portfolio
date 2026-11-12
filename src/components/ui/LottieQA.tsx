import React from 'react';
import { Lottie } from 'lottie-react';
import { useReducedMotion } from 'framer-motion';
import qaAnimationData from '../../assets/qa-animation.json';

export interface LottieQAProps {
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export const LottieQA: React.FC<LottieQAProps> = ({
  className = 'w-16 h-16',
  loop = true,
  autoplay = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Lottie
        src={qaAnimationData}
        loop={shouldReduceMotion ? false : loop}
        autoplay={shouldReduceMotion ? false : autoplay}
        className="w-full h-full"
      />
    </div>
  );
};
