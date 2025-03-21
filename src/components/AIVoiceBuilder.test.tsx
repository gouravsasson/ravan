import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AIVoiceBuilder } from './AIVoiceBuilder';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    form: ({ children, className, ...props }) => (
      <form className={className} {...props}>
        {children}
      </form>
    ),
  },
}));

// Mock TypewriterHeading
vi.mock('./TypewriterHeading', () => ({
  TypewriterHeading: ({ sequences }) => <div>{sequences[0]}</div>,
}));

describe('AIVoiceBuilder', () => {
  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders initial form fields', () => {
    render(<AIVoiceBuilder onSubmit={mockOnSubmit} />);
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
  });

  it('handles form submission', () => {
    render(<AIVoiceBuilder onSubmit={mockOnSubmit} />);
    
    // Fill out form
    fireEvent.change(screen.getByPlaceholderText('Phone Number'), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email Address'), {
      target: { value: 'john@example.com' },
    });

    // Navigate to next step
    fireEvent.click(screen.getByText('Next'));

    // Submit form
    fireEvent.click(screen.getByText('Create Voice'));

    expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({
      phoneNumber: '1234567890',
      name: 'John Doe',
      email: 'john@example.com',
    }));
  });

  it('navigates between steps', () => {
    render(<AIVoiceBuilder onSubmit={mockOnSubmit} />);
    
    // Initial step
    expect(screen.getByPlaceholderText('Phone Number')).toBeVisible();
    
    // Go to next step
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Natural Voice')).toBeVisible();
    
    // Go back
    fireEvent.click(screen.getByText('Back'));
    expect(screen.getByPlaceholderText('Phone Number')).toBeVisible();
  });

  it('handles voice type selection', () => {
    render(<AIVoiceBuilder onSubmit={mockOnSubmit} />);
    
    // Go to voice selection step
    fireEvent.click(screen.getByText('Next'));
    
    // Select custom voice
    fireEvent.click(screen.getByText('Custom Clone'));
    expect(screen.getByText('Record Your Voice')).toBeInTheDocument();
  });

  it('handles recording state', () => {
    render(<AIVoiceBuilder onSubmit={mockOnSubmit} />);
    
    // Go to voice selection step
    fireEvent.click(screen.getByText('Next'));
    
    // Select custom voice and start recording
    fireEvent.click(screen.getByText('Custom Clone'));
    fireEvent.click(screen.getByText('Record Your Voice'));
    
    expect(screen.getByText('Recording...')).toBeInTheDocument();
  });

  it('validates form fields', () => {
    render(<AIVoiceBuilder onSubmit={mockOnSubmit} />);
    
    // Submit without filling fields
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Create Voice'));
    
    expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({
      phoneNumber: '',
      name: '',
      email: '',
    }));
  });

  it('displays language selection', () => {
    render(<AIVoiceBuilder onSubmit={mockOnSubmit} />);
    
    // Go to voice selection step
    fireEvent.click(screen.getByText('Next'));
    
    const languageSelect = screen.getByRole('combobox');
    expect(languageSelect).toBeInTheDocument();
    
    fireEvent.change(languageSelect, { target: { value: 'es-ES' } });
    expect(languageSelect).toHaveValue('es-ES');
  });
});