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
        {this.props.children && <View style={styles.icon}>{this.props.children}</View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 15,
    borderColor: '#b69eff',
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,
    height: 40,
    width: '80%',
  },
  input: {
    width: '90%',
  },
  icon: {
    marginHorizontal: 10,
    flex: 1,
  },
});

export default Input;
