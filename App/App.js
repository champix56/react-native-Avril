import { arrayOf } from 'prop-types';
import React, { Component } from 'react'
import {  Text, View } from 'react-native'
import Button from './components/Button/Button';
import SplashScreen from './components/SplashScreen/SplashScreen';

export default class componentName extends React.Component {
  constructor(props){
    super(props);
    this.state={clicked:false}
  }
  render() {
    return (
      <View>
        <SplashScreen/>
      </View>
    )
  }
}