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
import {getImageURLForContestants} from '../actions/contestantImageActions'

class DashboardList extends Component {
    
    constructor(props) {
      super(props)

      this.state = {
        contestants: []
      }
    }

    componentDidUpdate(prevProps) {
        LayoutAnimation.linear();

        if (this.props.contestants.length != prevProps.contestants.length) {
          this.props.getImageUrlForContestants(this.props.contestants);
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                      ListHeaderComponent={
                        <View style={styles.raceInformationContainer}>
                          <Text>{this.props.race.name}</Text>
                          <Text>{this.props.race.description}</Text>
                          <Text>{this.props.race.totalLaps} Laps</Text>
                        </View>
                      } 
                      data={this.props.contestants}
                      renderItem = {({item}) => 
                      <ContestantCell key={item.id} contestant={item} imageUrl={this.props.contestantImageMap[item.id]}/>
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
  raceInformationContainer: {
    flexDirection:'column',
    padding: 10,
    marginLeft:15,
    marginRight:15,
    borderColor:'black',
    borderWidth:1,
    borderRadius: 2,
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    getImageUrlForContestants: (contestants) => dispatch(getImageURLForContestants(contestants))
  }
}

const mapStateToProps = (state) => {
  var contestantImageMap = state.contestantImages.contestantImageMap
  var contestants = state.firestore.ordered['racers'] !== undefined ? state.firestore.ordered['racers'] : [];
  var sortedContestants = contestants.slice().sort((a,b) => { return a.position - b.position});      
  return {
    contestants: sortedContestants,
    contestantImageMap
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
  