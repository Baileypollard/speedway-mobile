import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    SafeAreaView
} from "react-native";
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'

class Main extends Component {
    render() {
      console.log(this.props.contestants)
        return (
            <View style={styles.container}>
                <FlatList data={this.props.contestants}
                    renderItem={({item}) => 
                    <Text style={styles.item}>{item.name}</Text>}
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
      marginTop:0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      width: (Dimensions.get('window').width)
    },
    title: {
      fontSize: 32,
    },
  });
  