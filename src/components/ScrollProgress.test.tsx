import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, act } from '@testing-library/react';
import { ScrollProgress } from './ScrollProgress';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, style }) => (
      <div className={className} style={style}>
        {children}
      </div>
    ),
  },
  useScroll: () => ({ scrollYProgress: 0.5 }),
  useSpring: () => 0.5,
}));

describe('ScrollProgress', () => {
  beforeEach(() => {
    // Reset scroll position
    global.window.scrollY = 0;
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(<ScrollProgress />);
    expect(container).toBeInTheDocument();
  });

  it('is initially hidden', () => {
    const { container } = render(<ScrollProgress />);
    expect(container.firstChild).toBeNull();
  });

  it('shows progress bar after scrolling', () => {
    const { container } = render(<ScrollProgress />);
    
    act(() => {
      global.window.scrollY = 150;
      fireEvent.scroll(window);
    });

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('fixed');
    expect(container.firstChild).toHaveClass('bg-black');
  });

  it('hides progress bar when scrolling back to top', () => {
    const { container } = render(<ScrollProgress />);
    
    act(() => {
      global.window.scrollY = 150;
      fireEvent.scroll(window);
    });

    expect(container.firstChild).toBeInTheDocument();

    act(() => {
      global.window.scrollY = 0;
      fireEvent.scroll(window);
    });

    expect(container.firstChild).toBeNull();
  });

  it('handles window scroll event listener cleanup', () => {
    const { unmount } = render(<ScrollProgress />);
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    
    unmount();
    
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});