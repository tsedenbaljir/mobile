import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class button extends Component {
    constructor(props) {
        super(props);
        this.state = { color: props.color };
    }
    userLogin = () => {
        alert(this.props.button);
        this.setState({
            time:this.props.time
        })
    }
    render() {
        return (
            <View style={[styles.body, { backgroundColor: this.state.color }]}>
                <Text onPress={this.userLogin} >{this.props.button}</Text>
            </View>
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