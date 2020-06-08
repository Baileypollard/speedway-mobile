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
import {format} from 'date-fns'
import ScheduleCell from './scheduleCell'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'

class ScheduleList extends Component {
    
    constructor(props) {
      super(props)

      this.state = {
        contestants: []
      }
    }

    componentDidUpdate(prevProps) {
        LayoutAnimation.linear();
    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                      ListHeaderComponent={
                        <View style={styles.raceInformationContainer}>
                          <Text style={styles.titleText}>Upcoming 2020 Events</Text>
                        </View>
                      } 
                      data={this.props.races}
                      renderItem = {({item}) => 
                      <ScheduleCell key={item.id} race={item}/>
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
  titleText:{
    fontSize:27
  },
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
    borderWidth:1,
    borderRadius: 2,
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const mapStateToProps = (state) => {
  var races = state.firestore.ordered.races;     
  return {
    races
  }
}
  
export default compose(
  firestoreConnect([
    {
        collection:'races',
        storeAs:'races',
        where: [
          ['state', 'in', ['INACTIVE']]
        ],
    }
]),
  connect(mapStateToProps, mapDispatchToProps),
)(ScheduleList)
  