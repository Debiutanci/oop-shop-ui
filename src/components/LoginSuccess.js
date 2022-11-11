import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AuthContext } from '../../store/context/context';

class LoginSuccess extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => (
          <SafeAreaView style={styles.screen}>
            <View>
              <Text>You logged successfully</Text>
            </View>
            <TouchableOpacity onPress={() => context.signOut()}>
              <Text>Go back</Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}
      </AuthContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
});

export default LoginSuccess;
