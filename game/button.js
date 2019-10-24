import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class button extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color: props.color,
        };
    } 
    render() {
        return (
                <Text style={[styles.body, { backgroundColor: this.state.color }]}>{this.props.button}</Text>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        margin: 5,
        padding: 5,
        textAlign: 'center',
        borderColor: 'black',
        borderRadius: 50,
        fontWeight: 'bold',
        fontSize: 100,
    },
});