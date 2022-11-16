import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

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
        <View style={styles.iconWrapper}>
          <Image source={this.props.route.params.image} style={styles.icon} />
        </View>
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
    paddingHorizontal: 20,
    marginTop: 40,
    flex: 1,
  },
  iconWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    backgroundColor: '#f1edff',
    width: 180,
    height: 180,
    shadowColor: '#171717',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  icon: {
    width: 120,
    height: 120,
    margin: 10,
  },
  productName: {
    fontWeight: '700',
    fontSize: 26,
    paddingTop: 20,
  },
  text: {
    letterSpacing: 1,
    color: '#767676',
    marginLeft: 5,
    flex: 1,
  },
});

export default Products;
