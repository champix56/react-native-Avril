import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, TouchableHighlight } from 'react-native';
import store from '../../store/store';
import { PRODUCTS_ACTIONS_TYPE } from '../../store/reducerProduct';

function ListeElement(props) {
  console.log(props)
  return (
    <TouchableHighlight onPress={() => { store.dispatch({ type: PRODUCTS_ACTIONS_TYPE.SELECT_PRODUCT, value: props.product }) }}>
      <View style={{ height: 150, alignItems: 'center' }}>

        <View style={{ flex: 4 }}>
          <Image resizeMode={'center'} source={{ uri: props.product.img }} style={{ width: 100, height: 100 }} />
        </View>
        <View style={{ flex: 1, minHeight: 25 }}>
          <Text style={{ textAlign: 'center' }}>{props.product.name}</Text>
          <View>
            <Text style={{ textAlign: 'center' }} >{props.product.prix}€</Text>
          </View>
        </View>
      </View>

    </TouchableHighlight>
  );
}

ListeElement.propTypes = { product: PropTypes.object.isRequired };

ListeElement.defaultProps = {};

export default ListeElement;
