import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from './Contact';

describe('Contact', () => {
  it('renders the form correctly', () => {
    render(<Contact />, {wrapper: BrowserRouter});
    expect(screen.getByPlaceholderText('Name*')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Surname*')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email*')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Please type your message*')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('disables submit button when required fields are not filled', () => {
    render(<Contact />, {wrapper: BrowserRouter});
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeDisabled();

    const nameInput = screen.getByPlaceholderText('Name*');
    fireEvent.change(nameInput, { target: { value: 'John' } });
    expect(submitButton).toBeDisabled();

    const surnameInput = screen.getByPlaceholderText('Surname*');
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });
    expect(submitButton).toBeDisabled();

    const emailInput = screen.getByPlaceholderText('Email*');
    fireEvent.change(emailInput, { target: { value: 'invalidemail.com' } });
    expect(submitButton).toBeDisabled();
    
    const messageInput = screen.getByPlaceholderText('Please type your message*');
    fireEvent.change(messageInput, { target: { value: 'This is a test message' } });
    expect(submitButton).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: 'validemail@gmail.com' } });
    expect(submitButton).toBeEnabled();

   
  });
  
  it('displays success message when form is submitted successfully', () => {
    render(<Contact />, {wrapper: BrowserRouter});
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    const nameInput = screen.getByPlaceholderText('Name*');
    fireEvent.change(nameInput, { target: { value: 'John' } });

    const surnameInput = screen.getByPlaceholderText('Surname*');
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });

    const emailInput = screen.getByPlaceholderText('Email*');
    fireEvent.change(emailInput, { target: { value: 'validemail@gmail.com' } });

    const messageInput = screen.getByPlaceholderText('Please type your message*');
    fireEvent.change(messageInput, { target: { value: 'This is a test message' } });

    fireEvent.click(submitButton);

    expect(screen.getByText('Your message has been successfully sent!')).toBeInTheDocument();
  });
});
