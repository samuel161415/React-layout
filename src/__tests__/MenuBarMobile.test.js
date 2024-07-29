// @/components/Layout/MenuBarMobile.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import MenuBarMobile from '@/components/Layout/MenuBarMobile';

describe('MenuBarMobile Component', () => {
  const mockSetter = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders menu button, logo, and user icon', () => {
    render(<MenuBarMobile setter={mockSetter} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByAltText('Company Logo')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /user/i })).toBeInTheDocument();
  });

  it('calls setter function on menu button click', () => {
    render(<MenuBarMobile setter={mockSetter} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockSetter).toHaveBeenCalledTimes(1);
  });
});
