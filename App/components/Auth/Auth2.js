import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Animated, View, Button, Text, TextInput } from 'react-native';




const Auth = (props) => {
  const [state, setstate] = useState({ login: 'alex', password: 'a' });
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true // Add This line

      }
    ).start();
  }, [fadeAnim])
  console.log(props)
  return (<Animated.View style={{opacity:fadeAnim, backgroundColor: 'lightblue', height: '100%', alignItems: 'center', alignContent: 'center' }} data-testid="Auth">
    <View style={{ backgroundColor: 'white', width: 250, marginTop: '40%', borderColor: "black", borderStyle: 'solid', borderWidth: 1, padding: 30 }}>
      <View style={{ alignItems: 'center' }}>
        <Text>Login</Text>
      </View>
      <TextInput
        value={state.login}
        onChangeText={(e) => {
          setstate({ ...state, login: e })
        }}
        placeholder="log"
      />
      <View style={{ alignItems: 'center' }}>
        <Text>Password</Text>
      </View>
      <TextInput
        secureTextEntry={true}
        value={state.password}
        onChangeText={(e) => {
          console.log
          setstate({ ...state, password: e })
        }}
        placeholder='pass'
      />
      <Button title="authentification" onPress={() => {
        console.log(state);
        console.log(`http://desorbaix.alexandre.free.fr/phpRest/users/?login=${state.login}&password=${state.password}`);
        fetch(`http://desorbaix.alexandre.free.fr/phpRest/users/?login=${state.login}&password=${state.password}`)
          .then(r => r.json())
          .then(o => {
            console.log(o);
            console.log(o.length);
            if (o.length === 0) { setstate({ login: '', password: '' }) }
            else { props.onvalidauth(); }
          })
      }}></Button>
    </View>
  </Animated.View>
  );
}
Auth.propTypes = {
  onvalidauth: PropTypes.func.isRequired
};

Auth.defaultProps = {};

export default Auth;
