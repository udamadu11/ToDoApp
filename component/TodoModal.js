import { Text,View,StyleSheet } from "react-native";
import React, { Component } from 'react';

export default class TodoModal extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Modal</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems: 'center',
      flex:1
}
});