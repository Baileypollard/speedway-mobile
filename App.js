import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Main from './src/Main'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { createFirestoreInstance } from 'redux-firestore' 
import firebase from '@react-native-firebase/app'
import rootReducer from './src/reducers/index'
import {config} from './src/config'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import '@react-native-firebase/auth'
import '@react-native-firebase/firestore'

firebase.initializeApp(config)
firebase.firestore()

const initialState = window.__INITIAL_STATE__ || {

}

const store = createStore(rootReducer, initialState)

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
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="dark-content" />
        <Main/>
      </SafeAreaView>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
