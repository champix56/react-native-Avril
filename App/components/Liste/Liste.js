import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TextInput, StyleSheet, Dimensions, Button } from 'react-native';
import store from '../../store/store';
import ListeElement from '../ListeElement/ListeElement';
function Liste() {
  const [products, setproducts] = useState([]);
  const [findValue, setfindValue] = useState('');
  useEffect(() => {
    setproducts(store.getState().stock.products)
    store.subscribe(()=>{
      setproducts(store.getState().stock.products);
      console.log('products saved in Liste')
    })
  }, []);
  console.log(products)
  return (
    <View>
      <Text>Liste des produits</Text>
      <TextInput placeholder="saisir recherche" value={findValue} onChangeText={(value)=>{
        setfindValue(value)
      }}  ></TextInput>
      <Text>X produits</Text>
      <ScrollView style={style.scroll}>
          <View style={style.flexContainer}>
              {
                products.map((e,i)=>{
                 return  <>
                 <ListeElement key={'p-'+i} product={e}/>
                 {/* <Button title={e.name}/> */}
                 </>;
                })
                }
          </View>
      </ScrollView>
     </View>
  );
}
const style=StyleSheet.create({
  scroll:{
      height:Dimensions.get('window').height-160,
      borderColor:'grey',
      borderStyle:'solid',
      borderWidth:1,
     
  },
  flexContainer:{
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-around'
  }
})
Liste.propTypes = {};

Liste.defaultProps = {};

export default Liste;
