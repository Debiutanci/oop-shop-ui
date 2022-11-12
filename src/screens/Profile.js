import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../../store/context/context';

import UserIcon from '../components/UserProfile/UserProfileIcon';
import Btn from '../components/Button/BaseButton';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => (
          <View style={styles.box}>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <UserIcon />
              <View>
                <Text style={styles.mainSections}>Dane użytkownika</Text>
                <View style={styles.line} />
                <Text>Imie:</Text>
                <Text>Nazwisko:</Text>
              </View>
            </View>
            <Btn text="Wyloguj się" onPress={() => context.signOut()} />
          </View>
        )}
      </AuthContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#f9f9f9',
    borderColor: '#c2c2c2',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    margin: 30,
  },
  mainSections: {
    fontWeight: '500',
    fontSize: 20,
    color: '#848484',
  },
  line: {
    height: 1,
    backgroundColor: '#848484',
    width: '100%',
    marginVertical: 5,
  },
});

export default UserProfile;
