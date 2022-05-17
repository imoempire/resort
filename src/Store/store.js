import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore} from 'redux-firestore';
import Reducer from '../Reducer/Reducer';
import firebase from './firebase';
import thunk from 'redux-thunk';

let reducers= combineReducers({
    contact: Reducer,
})

const store=createStore(reducers, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
))

export default store;