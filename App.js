import 'react-native-gesture-handler';


import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Main from './src/Main'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import { createFirestoreInstance } from 'redux-firestore' 
import firebase from '@react-native-firebase/app'

import {config} from './src/config'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import {NavigationContainer} from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import thunk from 'redux-thunk';
import '@react-native-firebase/auth'
import '@react-native-firebase/firestore'
import '@react-native-firebase/storage'

import { firestoreReducer } from 'redux-firestore'
import  contestantImageReducer  from './src/reducers/contestantImageReducer'


if (!firebase.apps.length) {
  firebase.initializeApp(config)
  firebase.firestore()
  firebase.storage()
}

const rootReducer = combineReducers({
  contestantImages:contestantImageReducer,
  firestore:firestoreReducer,
});

const store = createStore(
  rootReducer, 
  applyMiddleware(thunk))

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true 
}

const rrfProps = {
  firebase: firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

export default function App() {
  console.log(store)
  return (
    <NavigationContainer>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Appbar.Header style={{backgroundColor:'black'}}>
          <Appbar.Content titleStyle={{fontSize:24}} title="Looney Speedway"/>
        </Appbar.Header>
        <Main/>
      </ReactReduxFirebaseProvider>
    </Provider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
