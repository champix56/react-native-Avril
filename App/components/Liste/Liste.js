import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TextInput, StyleSheet, Dimensions, Button } from 'react-native';
import store from '../../store/store';
import ListeElement from '../ListeElement/ListeElement';
import { productInitialState } from '../../store/reducerProduct';
import ProductDetail from '../ProductDetail/ProductDetail';
function Liste() {
  const [products, setproducts] = useState(productInitialState);
  const [foundProducts, setfoundProducts] = useState([]);
  const [findValue, setfindValue] = useState('');
  useEffect(() => {
    setproducts(store.getState().stock)
    setfoundProducts(store.getState().stock.products)
    store.subscribe(() => {
      setproducts(store.getState().stock);
      console.log('products saved in Liste')
    })
  }, []);
  //console.log(products)
  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={style.head}>
        <Text>Liste des produits</Text>
        <TextInput placeholder="saisir recherche" value={findValue} onChangeText={(value) => {

          setfindValue(value)
          setfoundProducts(products.products.filter((e)=>{
              return e.name
                        .toLowerCase()
                        .includes(value
                                    .toLowerCase())
            }))
        }}  ></TextInput>
        <Text>X produits</Text>
      </View>
      <View style={{ height:Dimensions.get('window').height-100 }}>
        <ScrollView style={style.scroll}>
          <View style={style.flexContainer}>
            {
              foundProducts.map((e, i) => {
                console.log(e)
                return <>
                  <ListeElement key={'p-' + i} product={e} />
                  {/* <Button title={e.name}/> */}
                </>;
              })
            }
          </View>
        </ScrollView>
        <ProductDetail style={style.productdetail} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  scroll: {
    // height: Dimensions.get('window').height - 160,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  productdetail: {
    flex: 1,
  },
  head: {
    height: 90
  },
  flexContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',

  }
})
Liste.propTypes = {};

Liste.defaultProps = {};

export default Liste;
