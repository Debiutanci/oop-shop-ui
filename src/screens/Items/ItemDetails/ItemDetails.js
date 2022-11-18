import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import GoBackBtn from '../../../components/GoBackButton/GoBackBtn';
import HorizontalLine from '../../../components/HorizontalLine/Line';
import SingleCategory from '../../../components/ItemDetails/SingleCategory';
import { styles } from './style';

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
            <Text style={styles.productPrice}>{this.props.route.params.product.price} zł</Text>
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
              {this.props.route.params.product.color.name}
              <View style={styles.colorSquare(this.props.route.params.product.color.hex)} />
            </SingleCategory>
            {/* <Text>{JSON.stringify(this.props.route.params.product)}</Text> */}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Products;
