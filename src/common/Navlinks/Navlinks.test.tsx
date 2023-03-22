import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Add this line
import Navlinks from './Navlinks';

describe('Navlinks Component Test', () => {
  test('Should renders Navlink component without crashing.', () => {
    render(<Router><Navlinks /></Router>); 
    const navlinks = screen.getByTestId('navlinks-container');
    expect(navlinks).toBeInTheDocument();
  });

  test('Should display Navigation component within Navlinks', () => {
    render(<Router><Navlinks /></Router>);
    const navigation = screen.getByRole('list');
    expect(navigation).toBeInTheDocument();
  })

  test('Should pass a boolean value prop false to the Navigation component', () => {
    render(<Router><Navlinks /></Router>); // Wrap Navlinks with Router component
    const navigation = screen.getByTestId('navlinks-container');
    expect(navigation).toHaveClass('navlinks_container');
  })
});
