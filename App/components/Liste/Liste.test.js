import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Liste from './Liste';

describe('<Liste />', () => {
  test('it should mount', () => {
    render(<Liste />);
    
    const liste = screen.getByTestId('Liste');

    expect(liste).toBeInTheDocument();
  });
});