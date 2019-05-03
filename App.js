/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      input0: '0',
      input1: '0',
      input2: '0',
      input3: '0',
    };
  }

  onChangeText0(text) {
    this.setState({
      input0: text
    }, () => {
      if (text.length === 4) {
        this.refs['1'].focus();
      }
    });
  }

  onChangeText1(text) {
    this.setState({
      input1: text
    }, () => {
      if (text.length === 4) {
        this.refs['2'].focus();
      }
      if (this.state.input1.length === 0) {
        this.refs['0'].focus();
      }
    });
  }

  onChangeText2(text) {
    this.setState({
      input2: text
    }, () => {
      if (text.length === 4) {
        this.refs['3'].focus();
      }
      if (this.state.input2.length === 0) {
        this.refs['1'].focus();
      }
    });
  }

  onChangeText3(text) {
    this.setState({
      input3: text
    }, () => {
      if (text.length === 4) {
        this.refs['3'].focus();
      }
      if (this.state.input3.length === 0) {
        this.refs['2'].focus();
      }
    });
  }

  onFocus1() {
    // if (this.state.input0.length < 4) {
    //   this.refs['0'].focus();
    // }
  }

  onFocus2() {
    // if (this.state.input1.length < 4) {
    //   this.refs['1'].focus();
    // }
  }

  onFocus3() {
    // if (this.state.input2.length < 4) {
    //   this.refs['2'].focus();
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Ambiente de testes!</Text>
        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
          <TextInput
            ref={'0'}
            style={styles.input}
            keyboardType={'numeric'}
            onChangeText={(text) => this.onChangeText0(text)}
            maxLength={4}
            autoCorrect={false}
            spellCheck={false}
          />
          <TextInput
            ref={'1'}
            style={styles.input}
            keyboardType={'numeric'}
            onChangeText={(text) => this.onChangeText1(text)}
            maxLength={4}
            autoCorrect={false}
            spellCheck={false}
            onFocus={this.onFocus1}
          />
          <TextInput
            ref={'2'}
            style={styles.input}
            keyboardType={'numeric'}
            onChangeText={(text) => this.onChangeText2(text)}
            maxLength={4}
            autoCorrect={false}
            spellCheck={false}
            onFocus={this.onFocus2}
          />
          <TextInput
            ref={'3'}
            style={styles.input}
            keyboardType={'numeric'}
            onChangeText={(text) => this.onChangeText3(text)}
            maxLength={4}
            autoCorrect={false}
            spellCheck={false}
            onFocus={this.onFocus3}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
    fontSize: 26,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'red'
  }
});
