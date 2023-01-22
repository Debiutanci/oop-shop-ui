import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getItemsFromCart } from '../../../store/auth/actions';
import CartItem from '../Items/ItemDetails/CartItem';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: null,
    };
  }

  getCartItems = (value) => {
    this.setState({
      cartItems: value,
    });
  };

  handleGetItemsFromCart = () => {
    getItemsFromCart(this.getCartItems);
  };

  componentDidMount() {
    this.handleGetItemsFromCart();
  }

  render() {
    return (
      <ScrollView style={styles.screenWrapper} contentContainerStyle={styles.screenAlignment}>
        {this.state.cartItems?.map((product) => (
          <CartItem
            products={product.product}
            key={product.identifier}
            quantity={product.quantity}
          />
        ))}
        <TouchableOpacity onPress={this.handleGetItemsFromCart}>
          <Text style={styles.refreshText}>Dotknij, by odświeżyć</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screenWrapper: {
    paddingTop: 15,
    flex: 1,
  },
  screenAlignment: {
    alignItems: 'center',
  },
  refreshText: {
    padding: 5,
  },
});

export default UserProfile;
