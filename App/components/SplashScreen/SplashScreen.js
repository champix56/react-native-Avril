import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import logoImg from './img';
export default function SplashScreen(props) {
  const [secondes, setsecondes] = useState({count:1});
  useEffect(() => {
    reduceSec();
  });

  useEffect(() => {
    console.log('init splash');
  },[]);
  const appName = { name: 'monApp', logo: logoImg };
  const reduceSec=()=> {
   
   setTimeout(()=>{
    console.log(`patientez ${secondes.count}s...`);
     if(secondes.count>0)setsecondes({count:secondes.count-1});
     else {props.onFinishSplash();}
   },1000)
  }
  return (
    <View testID="SplashScreen" style={{ backgroundColor: 'lightblue', height: '100%', alignContent: 'center', alignItems: 'center', paddingTop: '65%' }}>
      <Text style={{ color: 'white', fontWeight: '900', fontSize: 40, fontStyle:'italic' }}>{appName.name}</Text>
      <Image style={{ width: 200, height: 200, }} source={{ uri: appName.logo }} />
      <Text>Patientez {secondes.count}s</Text>
    </View>
  );
}
SplashScreen.propsType={
  onFinishSplash:PropTypes.func.isRequired
}