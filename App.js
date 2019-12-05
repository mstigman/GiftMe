import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Group from './group';

import firebase from 'firebase';
import '@firebase/firestore';


import { YellowBox } from 'react-native';
import _ from 'lodash';
import CreateGroupModal from './createGroupModel';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

// Initialize Firebase


firebaseConfig = {
  apiKey: "AIzaSyB0y4sWetAgTE0oNmWDGEHugwlnHPe-DSI",
  authDomain: "giftme-77cbd.firebaseapp.com",
  databaseURL: "https://giftme-77cbd.firebaseio.com",
  storageBucket: "giftme-77cbd.appspot.com",
  projectId: "giftme-77cbd"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();


export default class App  extends Component {
  state = {renderGroups: []};

  componentDidMount() {
    doc = db.collection('groups');
    observer = doc.onSnapshot(snapshot => {
      groups = this.state.renderGroups;
      snapshot.forEach(doc => {
        groups.push(
          <Text key={doc.id}>{doc.data().name}</Text>
        );
        this.setState({renderGroups: groups});
      })
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  }


  render() {
    displayGroups = this.state.renderGroups.map((p) => (
      <Group db={db} name={p.name}></Group>
    ));
  return (
    

    <View style={styles.container}>
      <Group db={db} name={"test"}></Group>
      {this.state.renderGroups}
      <CreateGroupModal db={db}></CreateGroupModal>
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
