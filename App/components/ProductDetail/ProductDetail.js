import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, ToastAndroid } from 'react-native';
import store from '../../store/store';
import { PRODUCTS_ACTIONS_TYPE } from '../../store/reducerProduct';
import Button from '../Button/Button';
import { TextInput } from 'react-native-gesture-handler';

function ProductDetail(props) {
  return (
    <View style={{ flex: 0.3, flexDirection: 'row' }}>
      <View>
        <Button text="fermer" onclick={() => { store.dispatch({ type: PRODUCTS_ACTIONS_TYPE.UNSELECT_PRODUCT }) }} />
        <Button text="Editer" bgcolor="red" onclick={() => { store.dispatch({ type: PRODUCTS_ACTIONS_TYPE.UNSELECT_PRODUCT }) }} />
        <View style={{ flexDirection: 'row' }}>
          <Button text="+" bgcolor="green" onclick={() => { ToastAndroid.show("Ajout de " + props.selected.name, ToastAndroid.SHORT); }} />
          <Button text="-" bgcolor="orange" onclick={() => { ToastAndroid.show("Suppr. de " + props.selected.name, ToastAndroid.SHORT); }} />
        </View>
      </View>

      <View style={{ flex: 1 , alignContent:'center', alignItems:'center'}}>
        <Image source={{ uri: props.selected.img }} style={{ height: 100, width: 100 }} />
      </View>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View><Text style={{ fontSize: 30, fontWeight: '900' }}>{props.selected.name}</Text></View>
        <View><Text style={{ fontSize: 18, textDecorationLine: 'underline', fontStyle: 'italic' }}>Description</Text></View>
        <Text>{props.selected.description}</Text>
        <View style={{ alignItems: 'flex-end', marginRight: 20 }}><Text style={{ fontSize: 28, color: 'green', fontWeight: '900' }}>{props.selected.prix}€</Text></View>

      </View>
    </View>
  );
}

ProductDetail.propTypes = {};

ProductDetail.defaultProps = {};

export default ProductDetail;
