import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TypewriterHeading } from './TypewriterHeading';
import { TypeAnimation } from 'react-type-animation';

// Mock react-type-animation
vi.mock('react-type-animation', () => ({
  TypeAnimation: vi.fn().mockImplementation(({ sequence, className }) => (
    <span className={className}>{sequence[0]}</span>
  ))
}));

describe('TypewriterHeading', () => {
  const sequences = ['Hello', 1000, 'World', 1000];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(<TypewriterHeading sequences={sequences} />);
    expect(container).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <TypewriterHeading sequences={sequences} className="custom-class" />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('passes correct props to TypeAnimation', () => {
    render(<TypewriterHeading sequences={sequences} />);
    expect(TypeAnimation).toHaveBeenCalledWith(
      expect.objectContaining({
        sequence: sequences,
        speed: 50,
        repeat: Infinity
      }),
      {}
    );
  });

  it('renders first sequence text initially', () => {
    render(<TypewriterHeading sequences={sequences} />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('handles empty sequences', () => {
    render(<TypewriterHeading sequences={[]} />);
    expect(TypeAnimation).toHaveBeenCalled();
  });
});