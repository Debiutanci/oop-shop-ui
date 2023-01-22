import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../../../store/context/context';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>There will be list of items chosen to buy</Text>
          </View>
        )}
      </AuthContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5,
  },
});

export default UserProfile;
