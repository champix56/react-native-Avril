import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SplashScreen from './SplashScreen';

describe('<SplashScreen />', () => {
  test('it should mount', () => {
    render(<SplashScreen />);
    
    const splashScreen = screen.getByTestId('SplashScreen');

    expect(splashScreen).toBeInTheDocument();
  });
});