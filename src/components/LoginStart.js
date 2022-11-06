import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Btn from './Button/BaseButton';
import Input from './Input/Input';

class LoginStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  setEmail = (value) => {
    this.setState({
      email: value,
    });
  };

  setPassword = (value) => {
    this.setState({
      password: value,
    });
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.screen}>
          <Text style={styles.name}>Home Screen</Text>
          <Input placeholder="email" onChange={this.setEmail} />
          <Input placeholder="password" onChange={this.setPassword} isSecured />
          <Text>{this.state.email}</Text>
          <Text>{this.state.password}</Text>
          <Btn text="Zaloguj" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: '400',
    alignSelf: 'center',
    color: 'black',
    marginVertical: 20,
  },
});

export default LoginStart;
