import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Group from './group';

import firebase from 'firebase';
import '@firebase/firestore';


import { YellowBox } from 'react-native';
import _ from 'lodash';
import CreateGroupModal from './createGroupModel';



export default class Main extends Component {

    state = {
        renderGroups: [], 
        db: this.props.db,
        auth: this.props.auth,
    };

  test = [];
  //state = {renderGroups: []};
  componentDidMount() {

    this.state.db.collection('groups').onSnapshot(snapshot => {
      groups = []
      snapshot.forEach(doc => {
        groups.push(
          {
            name: doc.data().name,
            id: doc.id,
          }
          // <Group key={doc.id} db={this.state.db} name={doc.data().name}/>
        );
        // console.log(doc.data().name);
      })
      this.setState({renderGroups: groups});
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  }


  componentDidUpdate() {
  }


  render() {
    const myList = this.state.renderGroups.map((item) => 
      <View key={item.id}>
        <Text>{item.name}</Text>
      </View>)
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          {myList}
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
