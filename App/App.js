import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from './components/Button/Button';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Auth from './components/Auth/Auth';
import Main from './components/Main/Main';
import store from './store/store';
import { CORE_ACTIONS_TYPE } from './store/reducer';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: undefined, isGranted: false, window: null }
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState().core);
    })
    store.dispatch({ type: CORE_ACTIONS_TYPE.CHANGE_WINDOW, value: <SplashScreen onFinishSplash={() => this.onSplashFinish()} /> });
  }

  /**
   * Change la fenetre à la fin du splashScreen
   */
  onSplashFinish() {
    //this.setState({ window: <Auth onConnect={() => this.onSuccessConnect()} /> })
    store.dispatch({ type: CORE_ACTIONS_TYPE.CHANGE_WINDOW, value: <Auth onConnect={() => this.onConnect()} /> })

  }
  onConnect() {
    store.dispatch({ type: CORE_ACTIONS_TYPE.CHANGE_WINDOW, value: <Main  /> })

  }
  render() {
    return (
      <View>
        {this.state.window}
      </View>
    )
  }
}