import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import Group from './group';

import firebase from 'firebase';
import '@firebase/firestore';

export default class CreateAccount extends Component {
    state = {
        username: "",
        password: "",
        message: ""
    };

    onChangeUsename(value) {
        this.setState({username: value})
    }

    onChangePassword(value) {
        this.setState({password: value})
    }

    onCreateAccount = () => {
        this.props.auth.createUserWithEmailAndPassword(this.state.username, this.state.password).then(promise => {
            this.setState({message: "Success!"});
        }).catch(err => {
            this.setState({message: err.message});
            
        });
    }

    render() {
        return (
            <View>
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.title}>Create Account</Text>
                    </View>
                    <Text style={styles.font} >username:</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={value => this.onChangeUsename(value)}
                        value={this.state.username}
                        defaultValue="email"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.font} >password: </Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={value => this.onChangePassword(value)}
                        value={this.state.password}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.button}>
                    <Button title="Register " onPress={this.onCreateAccount}/>
                </View>
                <View style={styles.button}>
                    <Button title="Back" onPress={this.props.back}/>
                </View>
                <View>
                    <Text style={styles.messageText}>{this.state.message}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 40,
        width: 300,
    },
    inputContainer: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    font: {
        fontSize: 20,
    },
    button: {
        paddingTop: 15,
    },
    messageText: {
        fontSize: 20
    },
    title: {
      fontSize: 30,  
    },
});