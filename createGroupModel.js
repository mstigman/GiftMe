import React, {Component} from 'react';
import {Modal, Text, View, Alert, Button, TextInput} from 'react-native';

export default class CreateGroupModal extends Component {
  state = {
    modalVisible: false,
    groupName: "",
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible, groupName: ""});
  }

  createNewGroup(db) {
    db.collection('groups').doc().set({
        name: this.state.groupName,
      }).then(() => {
        this.setModalVisible(false);
      });
      return;
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <TextInput value={this.state.groupName} onChangeText={text => this.setState({ groupName: text })}></TextInput>
            <Button title="submit" onPress={this.createNewGroup.bind(this, this.props.db)}></Button>
              <Button
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                title="exit"
                >
                <Text>Hide Modal</Text>
              </Button>
            </View>
          </View>
        </Modal>

        <Button
          onPress={() => {
            this.setModalVisible(true);
          }}
          title="Create Group"
          >
          <Text>Show Modal</Text>
        </Button>
      </View>
    );
  }
}