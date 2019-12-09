import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Group extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Text>{this.props.name}</Text>
        </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  

