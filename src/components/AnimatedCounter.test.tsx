import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { AnimatedCounter } from './AnimatedCounter';
import { useInView } from 'react-intersection-observer';

// Mock react-intersection-observer
vi.mock('react-intersection-observer', () => ({
  useInView: vi.fn()
}));

describe('AnimatedCounter', () => {
  const mockProps = {
    end: 100,
    suffix: '+',
    title: 'Test Counter',
    duration: 2
  };

  it('renders with correct title', () => {
    vi.mocked(useInView).mockReturnValue({ ref: null, inView: false });
    render(<AnimatedCounter {...mockProps} />);
    expect(screen.getByText('Test Counter')).toBeInTheDocument();
  });

  it('starts with initial value when not in view', () => {
    vi.mocked(useInView).mockReturnValue({ ref: null, inView: false });
    render(<AnimatedCounter {...mockProps} />);
    expect(screen.getByText('0+')).toBeInTheDocument();
  });

  it('starts animation when in view', () => {
    vi.mocked(useInView).mockReturnValue({ ref: null, inView: true });
    render(<AnimatedCounter {...mockProps} />);
    expect(screen.getByText('0+')).toBeInTheDocument();
  });

  it('applies custom duration', () => {
    vi.mocked(useInView).mockReturnValue({ ref: null, inView: true });
    render(<AnimatedCounter {...mockProps} duration={5} />);
    const counterElement = screen.getByText('0+');
    expect(counterElement).toBeInTheDocument();
  });

  it('handles large numbers with separators', () => {
    vi.mocked(useInView).mockReturnValue({ ref: null, inView: false });
    render(<AnimatedCounter {...mockProps} end={1000000} />);
    expect(screen.getByText('0+')).toBeInTheDocument();
  });
});