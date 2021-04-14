import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToList from './ToList';

describe('<ToList />', () => {
  test('it should mount', () => {
    render(<ToList />);
    
    const toList = screen.getByTestId('ToList');

    expect(toList).toBeInTheDocument();
  });
});