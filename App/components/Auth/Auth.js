import React, { useState, useEffect } from 'react';
import { View, Text, Button as Button2, StyleSheet } from 'react-native';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { REST_SRV } from '../../config/config';
import store from '../../store/store';
import { CORE_ACTIONS_TYPE } from '../../store/reducer';
function Auth(props) {
  const [loginDatas, setloginDatas] = useState({ login: 'alex', password: 'a' });
  
  useEffect(() => {
    setloginDatas({login: store.getState().core.login, password:store.getState().core.password});
    store.subscribe(()=>{
      setloginDatas({login: store.getState().core.login, password:store.getState().core.password});
    })
},[]);

  function makeAuth() {
    //console.log(loginDatas);
   store.dispatch({type:CORE_ACTIONS_TYPE.MAKE_AUTHENT})
  }

  return (
    <View data-testid="Auth" style={style.frame} >
      <View style={style.container}>
        <Text>Authentification</Text>
        <TextInput value={loginDatas.login} onChangeText={(value) => {
          //setloginDatas({ ...loginDatas, login: value });
          store.dispatch({type:CORE_ACTIONS_TYPE.SET_LOGIN,value:value})
        }} placeholder={'Login'}></TextInput>
        <TextInput value={loginDatas.password} onChangeText={(value) => {
          // setloginDatas({ ...loginDatas, password: value });
          store.dispatch({type:CORE_ACTIONS_TYPE.SET_PASSWORD,value:value})
        }} secureTextEntry={true} placeholder={'Password'}></TextInput>
        <Button text="connect" onclick={() => { makeAuth() }} />
        {/* <Button2 title="connect" onPress={ } /> */}
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  frame: {
    backgroundColor: 'lightblue',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 250,
    backgroundColor: 'white',
    // marginTop:'60%',
    padding: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10
  }
})

Auth.propTypes = {
  onConnect: PropTypes.func.isRequired
};

Auth.defaultProps = {};

export default Auth;
