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
import DasboardList from '../containers/dashboardList'

class Dashboard extends Component {

    render() {
        console.log(this.props.race)
        if (this.props.race !== undefined) {
            return (
                <View style={styles.container}>
                  <DasboardList race={this.props.race}/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                 <Text> There are no active races </Text>
                </View>
            );
        }
        
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 2,
  },
});

const mapDispatchToProps = (dispatch) => {
    return {
    }
  }
  
  const mapStateToProps = (state) => {
    const race = state.firestore.ordered.race 
    && state.firestore.ordered.race[0];
    
    return {
      race
    }
  }
  
  export default compose(
    firestoreConnect([
        {
            collection:'races',
            storeAs:'race',
            where: [
              ['state', 'in', ['STARTED', 'ACTIVE']]
            ]
        }
    ]),
    connect(mapStateToProps, mapDispatchToProps),
  )(Dashboard)
  