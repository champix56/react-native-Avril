import PlacesAcUnit from 'material-ui/svg-icons/places/ac-unit';
import PlacesHotTub from 'material-ui/svg-icons/places/hot-tub';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import store from '../../store/store';
// import GridLayout from '../GridLayout/GridLayout';
import ListeProduct from '../ListeProduct/ListeProduct';
import ProductDetail from '../ProductDetail/ProductDetail';
function Liste() {
  //const [state, setstate] = useState({findValue:'',filtred:[],products:[]});
  const [findValue, setFindValue] = useState('');
  const [products, setProducts] = useState([]);
  const [filtredProducts, setfiltredProducts] = useState([]);
const [selected, setselected] = useState(null);
  useEffect(() => {
    setProducts(store.getState().stock.products)
    setfiltredProducts(store.getState().stock.products);
    store.subscribe(() => {
      setProducts(store.getState().stock.products)
      setselected(store.getState().stock.selected)
    });
  }, [store]);
  /*useEffect(() => {
  });*/
  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={{ height: 90 }}>

        <Text style={{ textAlign: 'center' }}>Produits</Text>
        <TextInput style={{ textAlign: 'center', marginLeft: 10, marginRight: 10, borderRadius: 8, borderStyle: 'solid', borderColor: 'grey', borderWidth: 2 }} value={findValue} onChangeText={
          (value) => {
            setFindValue(value);
            setfiltredProducts(products.filter(e => {
              return e.name.includes(value.toLowerCase())
            }))
          }
        } placeholder="rechercher" />
        <Text style={{ textAlign: 'center' }}>{`${filtredProducts.length} results`}{findValue.length > 0 && ` for ${findValue}`}</Text>
      </View>
      <View style={{ height: Dimensions.get('window').height - 120 }}>
        <ScrollView style={{ flex: 3, marginHorizontal: 10, borderStyle: 'solid', borderColor: 'grey', borderWidth: 2 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {
              filtredProducts.map((p, i) => <ListeProduct product={p} key={'lp-' + i} />)
            }
          </View>
         
        </ScrollView> 

        {selected!=null&&<ProductDetail selected={selected}/>}
      </View>
    </View>
  );
}

Liste.propTypes = {};

Liste.defaultProps = {};

export default Liste;
