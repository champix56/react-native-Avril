import React, {useEffect, useState, useRef} from 'react';
import {Animated, View, Text, Image, StyleSheet } from 'react-native';
import logoImg from './img';
export default function SplashScreen(props) {
  const [secondes, setsecondes] = useState({count:2});
  const fadeAnim = useRef(new Animated.Value(1)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: (secondes.count)*1000+500,
        useNativeDriver: true // Add This line

      }
    ).start();
  }, [fadeAnim])

  useEffect(() => {
    reduceSec();
  });
  useEffect(() => {
    console.log('init splash');
  },[]);
  const appName = { name: 'monApp', logo: logoImg };
  const reduceSec=()=> {
    // if(secondes.count>0){}
   setTimeout(()=>{
     console.log(secondes)
     if(secondes.count>0)setsecondes({count:secondes.count-1});
    else props.onfinish();
   },1000)
  }
  return (
    <Animated.View style={{opacity:fadeAnim, backgroundColor: 'lightblue', height: '100%', alignContent: 'center', alignItems: 'center', paddingTop: '65%' }}>
      <Text style={{ color: 'white', fontWeight: '900', fontSize: 40, fontStyle:'italic' }}>{appName.name}</Text>
      <Image style={{ width: 200, height: 200, }} source={{ uri: appName.logo }} />
      <Text>Patientez {secondes.count}s</Text>
    </Animated.View>
  );
}
