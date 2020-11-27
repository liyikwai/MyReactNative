import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  state = {
    press: true,
    textValue: ''
  }

  onPress = () => {

    this.setState({
      textValue: this.state.press ? 'We are Group 7!' : '',
      press: !this.state.press
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redbox}>
        </View>
        <StatusBar style="auto" />
        <Button
          onPress={this.onPress}
          color="red"
          title="Button"
        />
        <Text>{this.state.textValue}</Text>
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
  redbox: {
    width: 200,
    height: 100,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
