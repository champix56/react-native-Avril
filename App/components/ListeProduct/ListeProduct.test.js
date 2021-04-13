import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListeProduct from './ListeProduct';

describe('<ListeProduct />', () => {
  test('it should mount', () => {
    render(<ListeProduct />);
    
    const listeProduct = screen.getByTestId('ListeProduct');

    expect(listeProduct).toBeInTheDocument();
  });
});