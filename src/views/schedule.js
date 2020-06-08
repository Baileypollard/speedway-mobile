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

import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import ScheduleList from '../containers/scheduleList'

class Schedule extends Component {

    render() {
            return (
                <View style={styles.container}>
                  <ScheduleList/>
                </View>
            );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});

  const mapStateToProps = (state) => {    
    return {
    }
  }
  
  export default compose(
    firestoreConnect([
        {
            collection:'races',
            storeAs:'races',
            where: [
              ['state', 'in', ['INACTIVE']]
            ]
        }
    ]),
    connect(mapStateToProps, null),
  )(Schedule)
  