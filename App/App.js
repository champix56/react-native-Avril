import { arrayOf } from 'prop-types';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from './components/Button/Button';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Auth from './components/Auth/Auth';
import Main from './components/Main/Main';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { window: <SplashScreen onFinishSplash={()=>this.onSplashFinish()} />}
  }
  /**
   * Change la fenetre a la fin du splashScreen
   */
  onSplashFinish() {
    this.setState({ window: <Auth onConnect={()=>this.onSuccessConnect() } /> })
  }
  /**
   * change la fenetre a la fin de la connexion
   */
  onSuccessConnect(){
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