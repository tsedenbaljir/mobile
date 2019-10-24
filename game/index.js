import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Button from './button'
import Send from './send'
const start = 'start';
export default class index extends Component {
    async storeToken(){
        // const {FirstName,Password,loginType}=this.state;
        try{
          await AsyncStorage.setItem(start, 'true'); 
        } catch(jerror){
          console.log(error);
        }
      }
    async storeTokenStop(){
        // const {FirstName,Password,loginType}=this.state;
        try{
          await AsyncStorage.setItem(start, 'false'); 
        } catch(jerror){
          console.log(error);
        }
      }
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.body}>
                    <View>
                        <Button button="hard" color="red" random="1000"/>
                        <Button button="normal" color="green" random="100" />
                        <Button button="ez" color="blue" random="10" />
                        <Button onPress={this.storeToken} button="START" 
                        color="blue"/>
                    </View>
                    <View style={{ marginLeft: '50%', marginTop: '-53%' }}>
                        <Button button="fast" color="red" time="1000" />
                        <Button button="normal" color="green" time="2000" />
                        <Button button="slow" color="blue" time="3000" />
                        <Button onPress={this.storeTokenStop} button="STOP" 
                        color="blue"/>
                    </View>
                    <Send />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        width: '90%',
        margin: 10,
        borderColor: 'black',
        backgroundColor: 'white',
    }, 
});