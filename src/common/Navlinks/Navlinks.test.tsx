import React from 'react';
import { render } from '@testing-library/react';
import Navlinks from './Navlinks';
import './Navlinks.scss'

describe('Navlinks component', () => {
  it('should render correctly', () => {
    const { container } = render(<Navlinks />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should contain a div with class "navlinks_container"', () => {
    const { getByTestId } = render(<Navlinks />);
    expect(getByTestId('navlinks-container').classList.contains('navlinks_container')).toBe(true);
  });

  it('should contain a span with text "Julia Kocik 2023"', () => {
    const { getByText } = render(<Navlinks />);
    expect(getByText('Julia Kocik 2023')).toBeInTheDocument();
  });

});
