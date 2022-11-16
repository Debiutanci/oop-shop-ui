import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../store/context/context';

import UserIcon from '../components/UserProfile/UserProfileIcon';
import Btn from '../components/Button/BaseButton';
import HorizontalLine from '../components/HorizontalLine/Line';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: '',
    };
  }

  getUser = async (setValue) => {
    try {
      const storedUserInfo = await AsyncStorage.getItem('userInfo');
      setValue(JSON.parse(storedUserInfo));
    } catch (error) {
      // error reading value
    }
  };

  setUserInfo = (value) => {
    this.setState({
      userInfo: value,
    });
  };

  componentDidMount() {
    this.getUser(this.setUserInfo).then();
  }

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => (
          <View style={styles.box}>
            <View style={styles.wrapper}>
              <UserIcon />
              <View>
                <Text style={styles.mainSections}>Dane użytkownika</Text>
                <HorizontalLine />
                <View style={styles.wrapper}>
                  <Text style={styles.sections}>Imie:</Text>
                  <Text>{this.state.userInfo.name}</Text>
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.sections}>Nazwisko:</Text>
                  <Text>{this.state.userInfo.surname}</Text>
                </View>
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
  wrapper: {
    flexDirection: 'row',
    marginBottom: 5,
  },
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
  sections: {
    fontWeight: '500',
    fontSize: 15,
    color: '#848484',
    marginRight: 20,
  },
});

export default UserProfile;
