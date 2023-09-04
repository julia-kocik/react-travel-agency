import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navlinks Component Test', () => {
    test('Should pass a boolean value prop false to the Navigation component', () => {
    const { container } = render(
        <Router>
        <Navigation showMobileMenu={false} />
        </Router>
    );

    const navigation = container.querySelector('.nav_container');
    expect(navigation).not.toHaveClass('nav_container_show');
    });

    test('Should pass a boolean value prop true to the Navigation component', () => {
        const { container } = render(
            <Router>
                <Navigation showMobileMenu={true} />
            </Router>
        );
    
        const navigation = container.querySelector('.nav_container');
        expect(navigation).toHaveClass('nav_container_show');
    });
})