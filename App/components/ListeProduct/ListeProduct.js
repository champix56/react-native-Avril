import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import l from '../SplashScreen/img';
import store from '../../store/store';
import { PRODUCTS_ACTIONS_TYPE } from '../../store/reducerProduct';

function ListeProduct(props) {
  return (
    <TouchableHighlight style={{ padding: 15 }} onPress={()=>{
      store.dispatch({type:PRODUCTS_ACTIONS_TYPE.SELECT_PRODUCT,value:props.product})
    }}>
    <View style={{alignItems:'center'}}>

        <Image
          style={{
            width: 50,
            height: 70,
          }}
          source={{ uri: props.product.img }} />
        <Text>{props.product.id + ':' + props.product.name}</Text>
        </View>
      </TouchableHighlight>
  );
}

ListeProduct.propTypes = {};

ListeProduct.defaultProps = {};

export default ListeProduct;
