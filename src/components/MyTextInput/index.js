import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import MyTestInput from '../components/MyTestInput'

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <MyTestInput />
      </View>
    );
  }
}
