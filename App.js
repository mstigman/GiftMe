import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Group from './group';
import Main from './main';

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


export default function App() {
  return (
    <View style={styles.container}>
      <Main db={db} auth={auth}></Main>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: .8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  create: {
    flex: .2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
