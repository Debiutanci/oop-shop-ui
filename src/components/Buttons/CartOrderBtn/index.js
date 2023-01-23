import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

class CartButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.btnWrapper} onPress={this.props.onPress}>
        <Image source={this.props.image} style={styles.icon} />
        <Text style={styles.btnText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btnWrapper: {
    backgroundColor: '#b69eff',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    height: 45,
    flex: 1,
  },
  icon: {
    tintColor: '#ffffff',
    marginLeft: 20,
    width: 20,
    height: 20,
  },
  btnText: {
    marginHorizontal: 20,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    flex: 1,
  },
});

export default CartButton;
