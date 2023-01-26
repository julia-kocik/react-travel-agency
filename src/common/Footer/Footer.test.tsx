import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import './Footer.scss'

describe('Footer component', () => {
  it('should render correctly', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should contain a div with class "footer_container"', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer-container').classList.contains('footer_container')).toBe(true);
  });

  it('should contain a span with text "Julia Kocik 2023"', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Julia Kocik 2023')).toBeInTheDocument();
  });

});
