import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../../store/context/context';
import { getStoreProducts } from '../../store/auth/actions';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  getProducts = (value) => {
    this.setState({
      products: value,
    });
  };

  componentDidMount() {
    getStoreProducts(this.getProducts);
  }

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => (
          <ScrollView>
            <View style={styles.box}>
              <Text>{JSON.stringify(this.state.products)}</Text>
            </View>
          </ScrollView>
        )}
      </AuthContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Products;
