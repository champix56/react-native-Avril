import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDetail from './ProductDetail';

describe('<ProductDetail />', () => {
  test('it should mount', () => {
    render(<ProductDetail />);
    
    const productDetail = screen.getByTestId('ProductDetail');

    expect(productDetail).toBeInTheDocument();
  });
});