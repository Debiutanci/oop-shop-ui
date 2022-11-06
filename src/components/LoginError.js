import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class LoginError extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <View>
          <Text>There was an error</Text>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
});

export default LoginError;
