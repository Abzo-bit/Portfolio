import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Projects from './Projects';

describe('Projects component', () => {
  test('renders the heading with correct text', () => {
    render(<Projects />);
    const heading = screen.getByRole('heading', { name: /Portfolio & Réalisations/i });
    expect(heading).toBeInTheDocument();
  });

  // Additional tests can be added here
});
