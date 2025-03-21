import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { UseCaseCard } from './UseCaseCard';
import { Phone } from 'lucide-react';

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

describe('UseCaseCard', () => {
  const mockProps = {
    icon: Phone,
    title: 'Test Title',
    description: 'Test Description',
    benefits: ['Benefit 1', 'Benefit 2'],
    index: 0
  };

  it('renders correctly', () => {
    render(<UseCaseCard {...mockProps} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('displays all benefits', () => {
    render(<UseCaseCard {...mockProps} />);
    mockProps.benefits.forEach(benefit => {
      expect(screen.getByText(benefit)).toBeInTheDocument();
    });
  });

  it('applies animation delay based on index', () => {
    const { container } = render(<UseCaseCard {...mockProps} index={2} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('handles hover interactions', () => {
    const { container } = render(<UseCaseCard {...mockProps} />);
    const card = container.firstChild;
    fireEvent.mouseEnter(card);
    expect(card).toHaveClass('group');
  });

  it('renders icon correctly', () => {
    const { container } = render(<UseCaseCard {...mockProps} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('handles empty benefits array', () => {
    render(<UseCaseCard {...mockProps} benefits={[]} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('handles long content gracefully', () => {
    const longProps = {
      ...mockProps,
      title: 'A'.repeat(50),
      description: 'B'.repeat(200),
      benefits: ['C'.repeat(100)]
    };
    render(<UseCaseCard {...longProps} />);
    expect(screen.getByText('A'.repeat(50))).toBeInTheDocument();
    expect(screen.getByText('B'.repeat(200))).toBeInTheDocument();
    expect(screen.getByText('C'.repeat(100))).toBeInTheDocument();
  });
});