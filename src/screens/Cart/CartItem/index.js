import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import GuitarIcon from '../../../assets/icons/products/guitar.png';
import PianoIcon from '../../../assets/icons/products/piano.png';
import HeadphonesIcon from '../../../assets/icons/products/headphones.png';
import BinIcon from '../../../assets/icons/bin.png';
import { removeFromCart } from '../../../../store/auth/actions';

class CategoryIconPicker {
  constructor() {
    this.__guitar_icon = GuitarIcon;
    this.__piano_icon = PianoIcon;
    this.__headphones_icon = HeadphonesIcon;
  }

  pickIcon = (category) => {
    switch (category) {
      case 'Gitary':
        return this.__guitar_icon;
      case 'Klawisze':
        return this.__piano_icon;
      case 'Akcesoria':
        return this.__headphones_icon;
      default:
        return null;
    }
  };
}

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.iconPicker = new CategoryIconPicker();
  }

  handleRemoving = () => {
    removeFromCart(this.props.products.identifier, this.props.refresh);
  };

  render() {
    return (
      <View style={styles.btnWrapper}>
        <Image
          source={this.iconPicker.pickIcon(this.props.products.category)}
          style={styles.icon}
        />
        <View style={styles.nameAndPrice}>
          <Text numberOfLines={1} style={styles.itemName}>
            {this.props.products.name}
          </Text>
          <View style={styles.wrapper}>
            <Text style={styles.itemDescription}>{this.props.products.price} zł</Text>
            <Text style={styles.itemDescription}>{this.props.quantity} szt.</Text>
            <View>
              <TouchableOpacity onPress={this.handleRemoving}>
                <Image source={BinIcon} style={styles.trashIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnWrapper: {
    backgroundColor: '#f9f9f9',
    borderColor: '#c2c2c2',
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    height: 80,
    width: '85%',
  },
  icon: {
    resizeMode: 'contain',
    marginHorizontal: 10,
    width: 60,
    height: 60,
  },
  trashIcon: {
    resizeMode: 'contain',
    width: 18,
    height: 18,
    tintColor: '#d80000',
  },
  nameAndPrice: {
    alignItems: 'center',
    flex: 1,
  },
  itemName: {
    fontWeight: '700',
    fontSize: 18,
  },
  itemDescription: {
    fontWeight: '500',
    fontSize: 16,
  },
  wrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    padding: 10,
  },
});

export default CartItem;
