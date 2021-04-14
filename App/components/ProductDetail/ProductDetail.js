import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, ToastAndroid } from 'react-native';
import Button from '../Button/Button';
import store from '../../store/store';
import { PRODUCTS_ACTIONS_TYPE } from '../../store/reducerProduct';

function ProductDetail(props) {
  const [selectedProduit, setselectedProduit] = useState(null);
  useEffect(() => {
    setselectedProduit(store.getState().stock.selected)
    store.subscribe(() => {
      setselectedProduit(store.getState().stock.selected)
    })
  }, []);
  return selectedProduit !== null ? (
    <View style={{ ...props.style, flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        <Image source={{ uri: selectedProduit.img }} resizeMode={'center'} style={{ height: '100%', width: '100%' }} />
      </View>
      <View style={{ flex: 2 }}>
        <Text>{selectedProduit.name}</Text>
        <Text>Description</Text>
        <Text>{selectedProduit.description}</Text>
        <Text>Prix :{selectedProduit.prix}€</Text>
        <Button text="fermer" bgcolor="blue" onclick={() => { store.dispatch({ type: PRODUCTS_ACTIONS_TYPE.UNSELECT_PRODUCT }) }} />
        <View style={{ flexDirection: 'row', justifyContent:'center' }}>
          <Button text="+" bgcolor="green" onclick={() => {ToastAndroid.showWithGravity('Ajout de '+selectedProduit.name,ToastAndroid.SHORT, ToastAndroid.TOP) }} style={{flex:1}} />
          <Button text="-" bgcolor="tomato" onclick={() => {ToastAndroid.showWithGravity('Suppr. de '+selectedProduit.name,ToastAndroid.SHORT, ToastAndroid.CENTER)  }} style={{flex:1}}/>
        </View>
      </View>
    </View>
  ) : null;
}

ProductDetail.propTypes = {};

ProductDetail.defaultProps = {};

export default ProductDetail;
