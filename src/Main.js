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

import { Ionicons } from '@expo/vector-icons';
import Dashboard from './containers/dashboard'

import BottomNavigation from 'react-native-material-bottom-navigation'
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';

const Main = createBottomTabNavigator(
  {
    Dashboard: { screen: Dashboard },
    Schedule: { screen: Dashboard },
    Tickets: { screen: Dashboard },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Dashboard') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Schedule') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }  else if (routeName === 'Tickets') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        } 
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(Main);

// class Main extends Component {

//     render() {
//         return (
//             <View style={styles.container}>
//               <Dashboard/>
//             </View>
//         );
//     }
// }

// export default Main

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection:'row',
//     marginBottom: 8,
//     borderRadius: 5,
//     backgroundColor: 'white',
//     elevation: 2,
//   },
// });