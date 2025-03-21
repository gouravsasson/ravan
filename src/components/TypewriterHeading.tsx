import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TypewriterHeadingProps {
  sequences: (string | number)[];
  className?: string;
}

export const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({ sequences, className = '' }) => {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper="span"
      speed={50}
      className={className}
      repeat={Infinity}
    />
  );
};