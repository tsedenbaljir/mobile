import React, { Component } from 'react';
import { Text, View, StyleSheet, AsyncStorage } from 'react-native';
import Game from './game/index'
import Start from './game/start'
const start = 'start';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingText: true,
            time: 1000,
            number:0
        };
        // 1 секунд тутам төлвийг соль
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        ), this.state.time);
    }
    componentDidMount(){
        AsyncStorage.getItem(start)
        .then((item) => {
             if (item=='true') {
                this.setState({
                    number:Math.floor(Math.random() * 100) + 1
                })
            }
        }); 
      }
    render() {
        return (
            <View style={styles.body}>
                <Game />
                <Start number={this.state.number} isShowingText={this.state.isShowingText} />
            </View>
        );
    }
}

// style css
const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        paddingTop: 50,
        backgroundColor: 'orange',
    },
});