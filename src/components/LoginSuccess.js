import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

class LoginSuccess extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <View>
          <Text>You logged successfully</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
});

export default LoginSuccess;
