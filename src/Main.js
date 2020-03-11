import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    SafeAreaView,
    LayoutAnimation,
    Linking
} from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import Dashboard from './views/dashboard'
import Tickets from './views/tickets'

import BottomNavigation from 'react-native-material-bottom-navigation'
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';

const Main = createBottomTabNavigator(
  {
    Dashboard: { screen: Dashboard },
    Schedule: { screen: Dashboard },
    Tickets: { screen: Tickets },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Dashboard') {
          iconName = `car`;
        } else if (routeName === 'Schedule') {
          iconName = `calendar`;
        }  else if (routeName === 'Tickets') {
          iconName = `ticket`;
        } 
        return <FontAwesome name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(Main);