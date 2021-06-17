import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from "../components/header_footer/Header";
afterEach(cleanup);
it('should be enabled', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('siderbar_button')).not.toHaveAttribute('disabled')
  });
  
describe('Header', () => {
    test('renders header component', () => {
      render(<Header />);
    });
  });