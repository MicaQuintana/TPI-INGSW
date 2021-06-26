import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Project by Micaela Quintana - Ing. Sw. UTN FRRe/i);
  expect(linkElement).toBeInTheDocument();
});
