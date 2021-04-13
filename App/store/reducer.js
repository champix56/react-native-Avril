import { REST_SRV } from "../config/config";
import store from "./store";
import Main from "../components/Main/Main";
export const initialState={window:null,login:'alex',password:'a', isGranted:false,isAuthChecked:false};
export const CORE_ACTIONS_TYPE=Object.freeze({
    SET_PASSWORD:'SET_PASSWORD',
    SET_LOGIN:'SET_LOGIN',
    MAKE_AUTHENT:'MAKE_AUTHENT',
    CHANGE_WINDOW:'CHANGE_WINDOW'
})
const PRIVATE_CORE_ACTIONS_TYPE=Object.freeze({
    GRANTED_AUTH:'GRANTED',
    DENY_AUTH:'DENY',
})
export default function reducer(state=initialState,action){
    switch(action.type){
        //actions interne pour l'async des fetch
        case PRIVATE_CORE_ACTIONS_TYPE.GRANTED_AUTH:return {...state, isGranted:true}
        case PRIVATE_CORE_ACTIONS_TYPE.DENY_AUTH:return {...state, login:'',password:''}
        //actions public pour l'app
        case CORE_ACTIONS_TYPE.CHANGE_WINDOW:return {...state,window:action.value}
            case CORE_ACTIONS_TYPE.MAKE_AUTHENT:
            const url = `${REST_SRV}/users?login=${state.login}&password=${state.password}`;
            console.log(url);
            fetch(url)
              .then(returnedFlow => returnedFlow.json(),()=>[])
              .then(objet => {
                if (Array.isArray(objet) && objet.length > 0) {
                  console.log('connect ok as ' + objet[0].login);
                  //userIsGranted
                  store.dispatch({type:PRIVATE_CORE_ACTIONS_TYPE.GRANTED_AUTH})
                }
                else {
                    //vidange user login values
                  store.dispatch({type:PRIVATE_CORE_ACTIONS_TYPE.DENY_AUTH})
                  console.log('connect ERROR');
                }
                return objet;
              });
        return state;
        case CORE_ACTIONS_TYPE.SET_PASSWORD:return {...state,password:action.value};
        case CORE_ACTIONS_TYPE.SET_LOGIN:return {...state,login:action.value};
        default : return state;
    }
}