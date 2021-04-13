import { arrayOf } from 'prop-types';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from './components/Button/Button';
import SplashScreen from './components/SplashScreen/SplashScreen2';
import Main from './components/Main/Main';
import Auth from './components/Auth/Auth2';
export default class componentName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { window: <SplashScreen onfinish={() => this.endsplash()} /> }
  }
  endsplash() {
    this.setState({ window: <Auth onvalidauth={() => this.isAuthent()} /> })
  }
  isAuthent() {
    this.setState({
      window: <Main disconnect={() => {
        this.setState({ window: <Auth onvalidauth={() => this.isAuthent()} /> })
      }} />
    })
  }
  render() {
    return (
      <View>
        {this.state.window}
      </View>
    )
  }
}