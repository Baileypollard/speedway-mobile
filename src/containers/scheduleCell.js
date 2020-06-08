import React, { Component } from "react";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {format} from 'date-fns'
import { FontAwesome } from '@expo/vector-icons';

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    SafeAreaView,
    Image
} from "react-native";


class ScheduleCell extends Component {
    render() {
        return <Card>
                    <View style={styles.cardContainer}>
                        <View style={styles.raceDateContainer}>
                            <Text style={styles.raceMonth}>{format(new Date(this.props.race.date), 'MMM')}</Text>
                            <Text style={styles.raceDay}>{format(new Date(this.props.race.date), 'dd')}</Text>
                        </View>
                        <View style={styles.raceNameContainer}>
                            <Text style={styles.raceName}>{this.props.race.name}</Text>
                            <Text style={styles.raceDescription}>{this.props.race.description}</Text>
                        </View>
                        <View style={styles.ticketContainer}>
                            <FontAwesome name={'ticket'} size={25}/>
                        </View>
                    </View>        
                </Card>
    }
}

const styles = StyleSheet.create({
    ticketContainer:{
        paddingLeft:10
    },
    cardContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    raceDateContainer :{
      flexDirection:'column',
      height:'100%',
      alignItems:'center'     
    },
    raceNameContainer:{
        paddingLeft:20,
        height:'100%',
        flexDirection:'column',
        flex:2
    },
    raceName:{
        paddingBottom:5,
        fontSize:27,
    },
    raceDescription:{
        fontSize:15,
    },
    raceDay:{
        fontSize:45,
    },
    raceMonth:{
        fontSize:25,
    },
    contestantPosition:{
        alignSelf:'flex-start',
        fontSize:16
    }
});

export default ScheduleCell;
  