import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  title: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  suffix = '',
  duration = 2.5,
  title
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold mb-2">
        {inView ? (
          <CountUp
            end={end}
            duration={duration}
            suffix={suffix}
            separator=","
          />
        ) : '0' + suffix}
      </div>
      <div className="text-black/70 font-medium">{title}</div>
    </div>
  );
};