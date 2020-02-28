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

import ContestantCell from './contestantCell'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'

class DashboardList extends Component {
    
    componentWillUpdate() {
        LayoutAnimation.linear();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.props.contestants}
                      renderItem = {({item}) => 
                      <ContestantCell key={item.id} contestant={item}/>
                    }
                />
            </View>
        );
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
    var contestants = state.firestore.ordered['racers'] !== undefined ? state.firestore.ordered['racers'] : [];
    var sortedContestants = contestants.slice().sort((a,b) => { return a.position - b.position});      
    return {
      contestants: sortedContestants,
    }
  }
  
  export default compose(
    firestoreConnect((props) => [
      {
        collection:'races',
        doc:props.race.id,
        storeAs:'racers',
        subcollections: [ 
          {
            collection:'contestants',
          }
        ],
      }
    ]),
    connect(mapStateToProps, mapDispatchToProps),
  )(DashboardList)
  