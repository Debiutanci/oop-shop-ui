import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import profileImage from '../../assets/icons/userProfileImage.png';

class ProfileImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.iconWrapper}>
        <Image source={profileImage} style={styles.icon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconWrapper: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 100,
    marginRight: 20,
  },
  icon: {
    height: 100,
    width: 100,
    tintColor: '#7d53ff',
  },
});

export default ProfileImage;
