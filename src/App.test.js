import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => {
  cleanup();
});

test('renders site title link in header', () => {
  render(<App />);
  const titleLink = screen.getByRole('link', { name: /Kateryna Mendoza/i });
  expect(titleLink).toBeInTheDocument();
});
