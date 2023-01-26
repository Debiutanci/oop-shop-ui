import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class LoginLogout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Text style={styles.textStyle}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  button: {
    backgroundColor: '#c9b7ff',
    padding: 10,
    width: 140,
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default LoginLogout;
