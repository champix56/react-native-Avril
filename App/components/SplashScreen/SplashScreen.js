import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import PropTypes from 'prop-types';
import logoImg from './img';
export default function SplashScreen(props) {
  const [secondes, setsecondes] = useState({ count: 1 });
  const fadeAnim = useRef(new Animated.Value(1)).current
  useEffect(() => {
    reduceSec();
  });

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: secondes.count *1000 + 1500,
        useNativeDriver:true
      }
    ).start();
  }, [fadeAnim])
  const appName = { name: 'monApp', logo: logoImg };
  const reduceSec = () => {

    setTimeout(() => {
      console.log(`patientez ${secondes.count}s...`);
      if (secondes.count > 0) setsecondes({ count: secondes.count - 1 });
      else { props.onFinishSplash(); }
    }, 1000)
  }
  return (
    <Animated.View testID="SplashScreen" style={{opacity:fadeAnim, backgroundColor: 'lightblue', height: '100%', alignContent: 'center', alignItems: 'center', paddingTop: '65%' }}>
      <Text style={{ color: 'white', fontWeight: '900', fontSize: 40, fontStyle: 'italic' }}>{appName.name}</Text>
      <Image style={{ width: 200, height: 200, }} source={{ uri: appName.logo }} />
      <Text>Patientez {secondes.count}s</Text>
    </Animated.View>
  );
}
SplashScreen.propsType = {
  onFinishSplash: PropTypes.func.isRequired
}