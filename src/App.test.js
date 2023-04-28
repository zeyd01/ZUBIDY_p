import { render, screen } from '@testing-library/react';
import App from './App';
import RegisterP from "./registerP";

test('renders learn react link', () => {

  render(<RegisterP/>);
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
