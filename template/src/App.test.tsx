import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import '@testing-library/jest-dom';
import App from './App';

const customWrapper = ({ children }: { children: React.ReactElement }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

test('renders learn react link', () => {
  render(<App />, { wrapper: customWrapper });
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
