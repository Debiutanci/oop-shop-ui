import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { AuthContext } from '../../store/context/context';
import { getStoreProducts } from '../../store/auth/actions';
import SingleItem from '../components/ItemList/SingleItem';

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
              {this.state.products?.map((product) => (
                <SingleItem products={product} key={product.identifier} />
              ))}
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
    marginVertical: 20,
  },
});

export default Products;
