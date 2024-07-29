// @/components/Layout/Sidebar.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '@/components/Layout/Sidebar';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Sidebar Component', () => {
  const mockSetter = jest.fn();
  useRouter.mockReturnValue({ pathname: '/' });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all links', () => {
    render(<Sidebar show={true} setter={mockSetter} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('T-Shirts')).toBeInTheDocument();
    expect(screen.getByText('Hats')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('calls setter function on link click', () => {
    render(<Sidebar show={true} setter={mockSetter} />);
    fireEvent.click(screen.getByText('Home'));
    expect(mockSetter).toHaveBeenCalledTimes(1);
  });
});
