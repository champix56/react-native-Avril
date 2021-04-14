import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { initialState } from '../../store/reducer';
import { productInitialState } from '../../store/reducerProduct';
import store from '../../store/store';
import Liste from '../Liste/Liste';
import ListeElement from '../ListeElement/ListeElement';
import ToList from '../ToList/ToList';

function Main() {
  const [state, setstate] = useState(productInitialState.products);
  useEffect(() => {
    setstate(store.getState().stock.products)
    store.subscribe(() => {
      setstate(store.getState().stock.products)
    })
  }, []);
  return (
    <View>
      {/* <Liste/> */}
      <ToList>
          {
            state.map((e,i)=><ListeElement product={e} key={i}/>)
          }
      </ToList>
    </View>
  );
}


Main.propTypes = {};

Main.defaultProps = {};

export default Main;
