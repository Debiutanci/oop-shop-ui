import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => this.props.onChange(value)}
          placeholder={`Enter your ${this.props.placeholder}`}
          secureTextEntry={this.props.isSecured}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    marginVertical: 15,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#b69eff',
    borderRadius: 15,
    padding: 10,
  },
});

export default Input;
