import { render, screen } from '@testing-library/react';
import About from './About';

describe('About component', () => {
  test('renders the heading with correct text', () => {
    render(<About />);
    const heading = screen.getByRole('heading', { name: /Passionné par le Développement/i });
    expect(heading).toBeInTheDocument();
  });
});
