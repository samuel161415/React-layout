// @/components/DummyPage.test.js
import { render, screen } from '@testing-library/react';
import DummyPage from '@/components/DummyPage';

describe('DummyPage Component', () => {
  it('renders the title', () => {
    render(<DummyPage title="Home Page" />);
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('has correct layout structure', () => {
    render(<DummyPage title="Home Page" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Home Page');
  });
});
