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
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  

function createGroup(db) {
    db.collection('groups').doc().set({
      test: "Big Yshi"
    }).then(() => {
      console.log();
    });
    return;
  }