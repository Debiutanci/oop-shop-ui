import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import GoBackBtn from '../components/GoBackButton/GoBackBtn';
import HorizontalLine from '../components/HorizontalLine/Line';
import SingleCategory from '../components/ItemDetails/SingleCategory';

class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.background}>
        <GoBackBtn navigation={this.props.navigation} />
        <View style={styles.screen}>
          <Text style={styles.productName}>{this.props.route.params.product.name}</Text>
          <HorizontalLine />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text>{this.props.route.params.product.price} zł</Text>
            <HorizontalLine />
            <SingleCategory category="Opis:">
              {this.props.route.params.product.description}
            </SingleCategory>
            <SingleCategory category="Kategoria:">
              {this.props.route.params.product.category}
            </SingleCategory>
            <SingleCategory category="Producent:">
              {this.props.route.params.product.manufacturer}
            </SingleCategory>
            <SingleCategory category="Kolor:">
              {this.props.route.params.product.color}
            </SingleCategory>
            {/* <Text>{JSON.stringify(this.props.route.params.product)}</Text> */}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f1edff',
  },
  screen: {
    backgroundColor: '#ffffff',
    borderColor: '#ddd4ff',
    borderWidth: 2,
    borderBottomColor: 'transparent',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: 200,
    flex: 1,
  },
  productName: {
    fontWeight: '700',
    fontSize: 26,
  },
  text: {
    letterSpacing: 1,
    color: '#767676',
    marginLeft: 5,
    flex: 1,
  },
});

export default Products;
