import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import GuitarIcon from '../../assets/icons/products/guitar.png';
import PianoIcon from '../../assets/icons/products/piano.png';
import HeadphonesIcon from '../../assets/icons/products/headphones.png';

class SingleItem extends Component {
  constructor(props) {
    super(props);
  }

  pickIcon = (category) => {
    if (category === 'Gitary') {
      return GuitarIcon;
    }
    if (category === 'Klawisze') {
      return PianoIcon;
    }
    return HeadphonesIcon;
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.btnWrapper}
        onPress={() => this.props.navigation.navigate('ItemDetails')}
      >
        <Image source={this.pickIcon(this.props.products.category)} style={styles.icon} />
        <View style={styles.nameAndPrice}>
          <Text style={styles.itemName}>{this.props.products.name}</Text>
          <Text style={styles.itemPrice}>{this.props.products.price} zł</Text>
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
    width: '85%',
  },
  icon: {
    width: 60,
    height: 60,
    margin: 10,
  },
  nameAndPrice: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginVertical: 10,
  },
  itemName: {
    fontWeight: '700',
    fontSize: 18,
  },
  itemPrice: {
    alignSelf: 'flex-end',
    marginHorizontal: 15,
  },
});

export default SingleItem;
