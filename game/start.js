import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class start extends Component {
    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.input} onPress={this.send}>
                    {!this.props.isShowingText && this.props.number}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: 200,
        textAlign: 'center',
        borderColor: 'black',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 200,
        justifyContent: 'center',
        alignItems: 'center',

    },
});