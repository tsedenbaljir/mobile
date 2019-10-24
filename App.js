import React, { Component } from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';
import Start from './game/start'
import Send from './game/send'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingText: true,
            time: 1000,
            number: 0,
            start: true
        };
    }
    storeToken() {
        if(this.state.start){
            this.setState({
                isShowingText: false
            })
        }else{
            this.setState({
                isShowingText: true
            })
        }
    }
    alert(e) {
        alert(e);
    } 
    timer = () => {
        alert(e.target.random);
        this.setState({
            time: 3000
        })
    }
    componentDidMount() {
        // 1 секунд тутам төлвийг соль
        if (this.state.start) {
            setInterval(() => (
                this.setState(previousState => (
                    {
                        number: Math.floor(Math.random() * 100) + 1,
                        isShowingText: !previousState.isShowingText
                    }
                ))
            ), this.state.time);
        }
    }
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.gameBody}>
                    <View style={styles.buttonbody}>
                        <Button title="hard" id={15} style={styles.buttonbody}
                            onPress={() => this.alert("hard")}
                        />
                        <Button title="normal" style={styles.buttonbody}
                            onPress={this._onPress}
                        />
                        <Button title="ez" style={styles.buttonbody}
                            onPress={() => Alert.alert('ez')}
                        />
                        <Button title="Start" style={styles.buttonbody}
                            onPress={() => this.storeToken}
                        />
                    </View>
                    <View style={{ marginLeft: '50%', marginTop: '-48%' }}>
                        <Button title="fast" style={styles.buttonbody}
                            onPress={() => Alert.alert('fast')}
                        />
                        <Button title="normal" style={styles.buttonbody}
                            onPress={() => Alert.alert('normal')}
                        />
                        <Button title="slow" style={styles.buttonbody}
                            onPress={() => Alert.alert('slow')}
                        />
                        <Button title="Stop" style={styles.buttonbody}
                            onPress={() => this.storeToken}
                        />
                    </View>
                    <Send />
                </View>
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
    buttonbody: {
        width:'50%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 5,
        textAlign: 'center',
        borderColor: '#3578E5',
        borderRadius: 50,
        fontWeight: 'bold',
    },
    gameBody: {
        backgroundColor:'gray',
        margin: 10,
        borderColor: 'black',
        backgroundColor: 'white',
    },
});