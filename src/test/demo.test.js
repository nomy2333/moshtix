import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NestedList from "../components/menuinfo/Demo";
import { renderHook, act } from '@testing-library/react-hooks';

describe('NestedList', () => {
    test('renders NestedList component', () => {
      render(<NestedList />);
    });
  });

afterEach(cleanup);
it('open_button0 should be enabled', () => {
      const { getByTestId } = render(<NestedList />);
      expect(getByTestId('open_button0')).not.toHaveAttribute('disabled')
    });
  
afterEach(cleanup);
it('open_button1 should be enabled', () => {
    const { getByTestId } = render(<NestedList />);
    expect(getByTestId('open_button1')).not.toHaveAttribute('disabled')
    });

afterEach(cleanup);
it('open_button2 should be enabled', () => {
    const { getByTestId } = render(<NestedList />);
    expect(getByTestId('open_button2')).not.toHaveAttribute('disabled')
    });

afterEach(cleanup);
it('open_button3 should be enabled', () => {
    const { getByTestId } = render(<NestedList />);
    expect(getByTestId('open_button3')).not.toHaveAttribute('disabled')
    });