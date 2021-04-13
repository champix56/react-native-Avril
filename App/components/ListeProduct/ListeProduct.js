import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import l from '../SplashScreen/img';
function ListeProduct(props) {
  // console.log(l);
  return (
    <View style={{ padding: 15 }}>
        <Image
          style={{
            width: 50,
            height: 70,
          }}
          source={{ uri: props.product.img }} />
        <Text>{props.product.id + ':' + props.product.name}</Text>
      </View>
  );
}

ListeProduct.propTypes = {};

ListeProduct.defaultProps = {};

export default ListeProduct;
