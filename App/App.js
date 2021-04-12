import { arrayOf } from 'prop-types';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from './components/Button/Button';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Main from './components/Main/Main';
import Auth from './components/Auth/Auth';
export default class componentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { window: <SplashScreen onfinish={() => this.endsplash()} /> }
  }
  endsplash() {
    this.setState({ window: <Auth onvalidauth={()=>this.isAuthent()} /> })
  }
  isAuthent() {
    this.setState({ window: <Main /> })
  }
  render() {
    return (
      <View>
        {this.state.window}
      </View>
    )
  }
}