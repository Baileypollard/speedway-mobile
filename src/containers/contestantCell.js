import React, { Component } from "react";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    SafeAreaView,
    Image
} from "react-native";


class ContestantCell extends Component {
    render() {
        return <Card>
                    <View style={styles.cardContainer}>
                        <View style={styles.contestantPositionContainer}>
                            <Text style={styles.contestantPosition}>{this.props.contestant.position}</Text>
                        </View>
                        <Image style={{width: 50, height: 70}} source={{uri:this.props.imageUrl}}/>
                        <View style={styles.contestantNameContainer}>
                            <Text style={styles.contestantName}>{this.props.contestant.name}</Text>
                            <Text style={styles.contestantNumber}>#{this.props.contestant.carNumber}</Text>
                        </View>
                        <View style={styles.contestantLapsCompletedContainer}>
                            <Text style={styles.contestantPosition}>Laps</Text>
                            <Text style={{fontSize:24, alignSelf:'center'}}>{this.props.contestant.lapsCompleted}</Text>
                        </View>
                    </View>        
                </Card>
    }
}

const styles = StyleSheet.create({
    cardContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    contestantPositionContainer :{
      flexDirection:'column',
      paddingEnd:15,
      height:'100%'
    },
    contestantNameContainer:{
        padding:10,
        flexDirection:'column',
        flex:2
    },
    contestantLapsCompletedContainer: {
        flexDirection:'column'
    },
    contestantName:{
        fontSize:24,
    },
    contestantNumber:{
        fontSize:17,
    },
    contestantPosition:{
        alignSelf:'flex-start',
        fontSize:16
    }
});

export default ContestantCell;
  