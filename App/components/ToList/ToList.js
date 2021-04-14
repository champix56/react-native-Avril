import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

export default function ToList(props) {
  return (
    <View>
      {props.children}
     </View>
  );
}


ToList.propTypes = {
  children:PropTypes.array
};

ToList.defaultProps = {};

