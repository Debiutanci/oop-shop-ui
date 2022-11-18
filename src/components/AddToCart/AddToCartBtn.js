import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import ShoppingCartIcon from '../../assets/icons/shopping-cart.png';

class AddToCart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.btnWrapper}>
        <Image source={ShoppingCartIcon} style={styles.icon} />
        <Text style={styles.btnText}>Dodaj do koszyka</Text>
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
    marginLeft: 40,
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

export default AddToCart;
