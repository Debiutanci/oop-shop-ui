import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import ArrowIcon from '../../assets/icons/left-arrow.png';

class GoBack extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.btnWrapper}>
        <Image source={ArrowIcon} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    tintColor: '#7d52ff',
  },
  btnWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
    shadowColor: '#171717',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});

export default GoBack;
