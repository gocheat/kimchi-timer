import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Button from "../Button";

export default class Timer extends Component {
    render() {
        const {
            isPlaying,
            elapsedTime,
            timerDuration
        } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    { !isPlaying ?
                        <Button iconName={"play-circle"} onPress={()=> alert("play!!")}/> :
                        <Button iconName={"stop-circle"} onPress={()=> alert("stop!!")}/>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ce0b24"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100"
    }
})