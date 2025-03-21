import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FeatureCard } from './FeatureCard';
import { Zap } from 'lucide-react';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }) => (
      <div className={className} {...props}>
        {children}
      </div>
    ),
  },
}));

describe('FeatureCard', () => {
  const mockProps = {
    icon: Zap,
    title: 'Test Feature',
    description: 'Test Description',
    delay: 0.2
  };

  it('renders correctly', () => {
    render(<FeatureCard {...mockProps} />);
    expect(screen.getByText('Test Feature')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('includes icon', () => {
    const { container } = render(<FeatureCard {...mockProps} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies correct classes', () => {
    const { container } = render(<FeatureCard {...mockProps} />);
    expect(container.firstChild).toHaveClass('bg-white/30');
    expect(container.firstChild).toHaveClass('rounded-2xl');
  });

  it('handles hover state', () => {
    const { container } = render(<FeatureCard {...mockProps} />);
    const card = container.firstChild;
    fireEvent.mouseEnter(card);
    expect(card).toHaveClass('group');
  });

  it('renders with custom delay', () => {
    const customDelay = 0.5;
    render(<FeatureCard {...mockProps} delay={customDelay} />);
    expect(screen.getByText('Test Feature')).toBeInTheDocument();
  });

  it('handles long descriptions', () => {
    const longDescription = 'A'.repeat(200);
    render(<FeatureCard {...mockProps} description={longDescription} />);
    expect(screen.getByText(longDescription)).toBeInTheDocument();
  });
});