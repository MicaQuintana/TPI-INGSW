import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Project by Micaela Quintana - Ing. SW. UTN FRRe/i);
  expect(linkElement).toBeInTheDocument();
});
