import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import HiddenIcon from '../../assets/icons/hidden.png';
import ShownIcon from '../../assets/icons/shown.png';

class ShowAndHide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.setIsSecured(this.props.isSecured)}>
        <Image source={this.props.isSecured ? HiddenIcon : ShownIcon} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    tintColor: '#7d52ff',
  },
});

export default ShowAndHide;
