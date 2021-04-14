import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';

function ListeElement(props) {
  console.log(props)
  return (
    <View style={{ height: 150,  alignItems: 'center' }}>
      <View style={{  flex: 4 }}>
        <Image resizeMode={'center'} source={{ uri: props.product.img }} style={{ width: 100, height: 100 }} />
      </View>
      <View style={{  flex: 1, minHeight:25 }}>
        <Text style={{textAlign:'center'}}>{props.product.name}</Text>
        <View>
          <Text style={{textAlign:'center'}} >{props.product.prix}€</Text>
        </View>
      </View>
    </View>
  );
}

ListeElement.propTypes = { product: PropTypes.object.isRequired };

ListeElement.defaultProps = {};

export default ListeElement;
