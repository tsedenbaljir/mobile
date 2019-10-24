import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class send extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: 0,
        };
    }
    render() {
        return (
            <View style={styles.body}>
                <TextInput style={styles.input} />
                <Text style={styles.input} onPress={this.send}>submit</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        width: '95%',
        margin: 5,
        padding: 5,
        textAlign: 'center',
        borderColor: 'black',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginTop: 10,
        backgroundColor: 'white',
        width: 100,
        color: 'blue',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },
});