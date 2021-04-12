import React from 'react';
import PropsTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
// import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Button(props) {
  console.log(props.bgcolor)
  return (
    <View>
      <TouchableHighlight onPress={props.onclick} data-testid="Button" style={{ ...style.container, backgroundColor: props.bgcolor }}>
        <Text style={style.contentText}>{props.text}</Text>
      </TouchableHighlight>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 5,
  },
  contentText: {
    color: 'grey'
  }
});
Button.propTypes = {
  text: PropsTypes.string.isRequired,
  bgcolor: PropsTypes.string.isRequired,
  onclick: PropsTypes.func.isRequired
}
Button.defaultProps = {
  bgcolor: 'lightblue',
  onclick: function () {
    console.log('button clicked');
  }
}