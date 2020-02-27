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
import ContestantCell from '../src/containers/contestantCell'

class Main extends Component {

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
  firestoreConnect([
    {
      collection:'races',
      doc:'race-2019-01-01',
      storeAs:'racers',
      subcollections: [ 
        {
          collection:'contestants',
        }
      ],
    }
  ]),
  connect(mapStateToProps, mapDispatchToProps),
)(Main)


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
  