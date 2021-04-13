import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GridLayout from './GridLayout';

describe('<GridLayout />', () => {
  test('it should mount', () => {
    render(<GridLayout />);
    
    const gridLayout = screen.getByTestId('GridLayout');

    expect(gridLayout).toBeInTheDocument();
  });
});