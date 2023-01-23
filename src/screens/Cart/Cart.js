import React, { Component } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getItemsFromCart } from '../../../store/auth/actions';
import CartItem from './CartItem';
import MakeAnOrder from '../../components/Buttons/CartOrderBtn';

import TrolleyIcon from '../../assets/icons/shopping-trolley.png';

function CartContent(cart, products, refresh, makeAnOrder) {
  if (cart && cart.length) {
    return (
      <View>
        {products?.map((product) => (
          <CartItem
            products={product.product}
            key={product.identifier}
            quantity={product.quantity}
            refresh={refresh}
          />
        ))}
        <View style={styles.buttonWrapper}>
          <View style={styles.orderButton}>
            <MakeAnOrder image={TrolleyIcon} title="Zamawiam" onPress={makeAnOrder} />
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.screenAlignment}>
      <Text style={styles.refreshText}>Twój koszyk jest pusty :(</Text>
      <Text style={styles.refreshText}>Dodaj wybrany produkt i odśwież koszyk</Text>
    </View>
  );
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: null,
      cartID: null,
      userID: null,
      refreshing: false,
    };
  }

  getCartItems = (value) => {
    this.setState({
      cartItems: value,
    });
  };

  getCartID = (value) => {
    this.setState({
      cartID: value,
    });
  };

  getUserID = (value) => {
    this.setState({
      userID: value,
    });
  };

  handleGetItemsFromCart = () => {
    getItemsFromCart(this.getCartItems, this.getCartID, this.getUserID);
  };

  handleMakeAnOrder = () => {
    // console.log(this.state.userID);
    // console.log(this.state.cartID);
    //  todo
  };

  onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    this.handleGetItemsFromCart();
    setTimeout(() => {
      this.setState({
        refreshing: false,
      });
    }, 800);
  };

  componentDidMount() {
    this.handleGetItemsFromCart();
  }

  render() {
    return (
      <ScrollView style={styles.screenWrapper} contentContainerStyle={styles.screenAlignment}>
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          progressViewOffset={-50}
        />
        {CartContent(
          this.state.cartItems,
          this.state.cartItems,
          this.handleGetItemsFromCart,
          this.handleMakeAnOrder
        )}
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
    justifyContent: 'center',
  },
  refreshText: {
    fontWeight: '400',
    fontSize: 16,
    padding: 5,
    flex: 1,
  },
  orderButton: {
    marginVertical: 10,
    width: '50%',
    padding: 5,
  },
  buttonWrapper: {
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default Cart;
