import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ProductIcon from '../../assets/icons/guitar.png';

class SingleItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.btnWrapper}>
        <Image source={ProductIcon} style={styles.icon} />
        <View style={styles.nameAndPrice}>
          <Text style={styles.itemName}>{this.props.products.name}</Text>
          <Text>{this.props.products.price} zł</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btnWrapper: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderColor: '#c2c2c2',
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    height: 100,
    width: '90%',
  },
  icon: {
    width: 60,
    height: 60,
    margin: 10,
  },
  nameAndPrice: {
    alignItems: 'center',
    flex: 1,
  },
  itemName: {
    fontWeight: '700',
    fontSize: 18,
  },
});

export default SingleItem;
