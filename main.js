import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Group from './group';

import firebase from 'firebase';
import '@firebase/firestore';


import { YellowBox } from 'react-native';
import _ from 'lodash';
import CreateGroupModal from './createGroupModel';



export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        renderGroups: [], 
        db: props.db,
        auth: props.auth,
        test: ""
    };
  }

  test = [];
  //state = {renderGroups: []};
  componentDidMount() {
    this.test.push(
        <Group db={this.state.db} name={"yoshi"}/>
      );
      
      this.setState({test: this.test});
    this.state.db.collection('groups').onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        this.state.renderGroups.push(
            <Group db={this.state.db} name={doc.data().name}/>
        );
        console.log(doc.data().name);

      })
      this.setState({renderGroups: this.state.renderGroups});
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  }


  componentDidUpdate() {
    console.log("yeet");
  }


  render() {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Group db={this.state.db} name={"test"}/>
        { this.state.renderGroups }
        {console.log(this.state.renderGroups)}
      </View>
      <CreateGroupModal db={this.state.db} style={styles.create}></CreateGroupModal>
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
  item: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
