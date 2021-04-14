import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListeElement from './ListeElement';

describe('<ListeElement />', () => {
  test('it should mount', () => {
    render(<ListeElement />);
    
    const listeElement = screen.getByTestId('ListeElement');

    expect(listeElement).toBeInTheDocument();
  });
});