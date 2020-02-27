import React, { Component } from "react";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    SafeAreaView,
} from "react-native";


class ContestantCell extends Component {

    constructor(props) {
        super(props)
        var contestant = props.contestant;
    }

    render() {
        return <Card>
                    <View style={styles.cardContainer}>
                        <View style={styles.contestantPositionContainer}>
                            <Text style={styles.contestantPosition}>{this.props.contestant.position}</Text>
                        </View>
                        <View style={styles.contestantNameContainer}>
                            <Text style={styles.contestantName}>{this.props.contestant.name}</Text>
                            <Text style={styles.contestantNumber}>#{this.props.contestant.carNumber}</Text>
                        </View>
                        <Text style={styles.contestantName}>{this.props.contestant.lapsCompleted}</Text>
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
  