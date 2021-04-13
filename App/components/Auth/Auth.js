import React, { useState } from 'react';
import { View, Text, Button as Button2, StyleSheet } from 'react-native';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import {REST_SRV} from '../../config/config';
function Auth(props) {
  const [loginDatas, setloginDatas] = useState({login:'alex',password:'a'});
  
  function makeAuth() {
    console.log(loginDatas);
    const url=`${REST_SRV}/users?login=${loginDatas.login}&password=${loginDatas.password}`;
    console.log(url);
    fetch(url)
    .then(returnedFlow=>returnedFlow.json())
    .then(objet=>{
        console.log(objet);
        if(objet.length>0)
        {
          props.onConnect()
        }
        else{
          setloginDatas({password:'',login:''});
        }
        return objet;
    });
  }
  
  return (
    <View data-testid="Auth" style={style.frame} >
      <View style={style.container}>
        <Text>Authentification</Text>
        <TextInput value={loginDatas.login} onChangeText={(value)=>{
              setloginDatas({...loginDatas ,login:value});
        }}  placeholder={'Login'}></TextInput>
        <TextInput value={loginDatas.password} onChangeText={(value)=>{
              setloginDatas({...loginDatas ,password:value});
        }} secureTextEntry={true} placeholder={'Password'}></TextInput>
        <Button text="connect" onclick={() => { makeAuth() }} />
        {/* <Button2 title="connect" onPress={ } /> */}
      </View>
    </View>
  );
}
const style=StyleSheet.create({
  frame:{
    backgroundColor:'lightblue',
    height:'100%',
    alignItems:'center',
    justifyContent: 'center',
  },
  container:{
    width:250,
    backgroundColor:'white',
    // marginTop:'60%',
    padding:10,
    borderColor:'black',
    borderStyle:'solid',
    borderWidth:1,
    borderRadius:10
  }
})

Auth.propTypes = {
  onConnect: PropTypes.func.isRequired
};

Auth.defaultProps = {};

export default Auth;
