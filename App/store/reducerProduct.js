import {REST_SRV} from '../config/config';
import store from './store';
export const productInitialState={selected:null,products:[{id:1,name:'lego',img:'',}]};
export const PRODUCTS_ACTIONS_TYPE=Object.freeze({
    ADD_PRODUCT:'ADD_PRODUCT',
    ADD_PRODUCTS:'ADD_PRODUCTS',
    SELECT_PRODUCT:'SELECT_PRODUCT',
    UNSELECT_PRODUCT:'SELECT_PRODUCT'
})
export const PRIVATE_PRODUCTS_ACTIONS_TYPE=Object.freeze({
    REPLACE_PRODUCTS:'REPLACE_PRODUCTS'
})

export default function reducer(state=productInitialState,action){
    console.log(action.type);
    if(action.type.includes('@@redux/INIT'))action.type='@@redux/INIT';
    switch(action.type){
        case '@@redux/INIT':
            console.log(`${REST_SRV}/products`)
            fetch(`${REST_SRV}/products`)
            .then(flow=>flow.json(),()=>[])
            .then(a=>{store.dispatch({type:PRIVATE_PRODUCTS_ACTIONS_TYPE.REPLACE_PRODUCTS,values:a})
            })
            return state;
        case PRODUCTS_ACTIONS_TYPE.ADD_PRODUCT:return {...state,products:[...state.products,action.value]};
        case PRODUCTS_ACTIONS_TYPE.ADD_PRODUCTS:return {...state,products:[...state.products,...action.values]};
        case PRODUCTS_ACTIONS_TYPE.SELECT_PRODUCT:return {...state,selected: action.value};
        case PRODUCTS_ACTIONS_TYPE.UNSELECT_PRODUCT:return {...state,selected: null};
        case PRIVATE_PRODUCTS_ACTIONS_TYPE.REPLACE_PRODUCTS:return {...state,products:[...action.values]};
        default : return state;
    }
}