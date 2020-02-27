import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    SafeAreaView,
    LayoutAnimation
} from "react-native";

import Dashboard from './containers/dashboard'
import BottomNavigation from 'react-native-material-bottom-navigation'
import { createAppContainer } from "react-navigation";


class Main extends Component {

    render() {
        return (
            <View style={styles.container}>
              <Dashboard/>
            </View>
        );
    }
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    padding: 10,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 2,
  },
});