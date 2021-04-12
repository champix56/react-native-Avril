import React from 'react';
import { View, Text, Button } from 'react-native';
import PropsTypes from 'prop-types';
export default function Main(props) {
  return (<>
    <View style={{ alignItems: 'center', height: '95%' }}>
      <Text style={{ fontSize: 50 }}>Main</Text>
    </View>
    <View style={{ height: '5%' }}>
      <Button title="Disconnect" onPress={()=>props.disconnect()} />

    </View>
  </>);
}
Main.propsTypes = {
  disconnect: PropsTypes.func.isRequired
}
Main.defaultProps = {
  disconnect: () => { }
}