import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {View,  Button, Text, TextInput } from 'react-native';




const Auth = (props) => {
  const [state, setstate] = useState({ login: 'alex', password: 'a' });
  console.log(props)
  return (<View style={{alignItems:'center',alignContent:'center'}}  data-testid="Auth">
  <View style={{width:250,marginTop:'40%', borderColor:"black", borderStyle:'solid', borderWidth:1, padding:30}}>
    <Text>Login</Text>
    <TextInput 
      value={state.login}
      onChangeText={(e)=>{
        setstate({...state,login:e})
      }}
      placeholder="log"
    />
    <Text>Password</Text>
    <TextInput
      value={state.password}
      onChangeText={(e)=>{
        console.log
        setstate({...state,password:e})
      }}
      placeholder='pass'
    />
    <Button title="authentification" onPress={()=>{
      console.log(state);
      console.log(`http://desorbaix.alexandre.free.fr/phpRest/users/?login=${state.login}&password=${state.password}`);
      fetch(`http://desorbaix.alexandre.free.fr/phpRest/users/?login=${state.login}&password=${state.password}`)
      .then(r => r.text())
      .then(o => {
        console.log(o);
        if(o.length===0){setstate({login:'',password:''})}
        else{props.onvalidauth();}
      })
    }}></Button>
  </View>
  </View>
  );
}
Auth.propTypes = {
  onvalidauth: PropTypes.func.isRequired
};

Auth.defaultProps = {};

export default Auth;
