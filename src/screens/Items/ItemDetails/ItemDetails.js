import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import GoBackBtn from '../../../components/GoBackButton/GoBackBtn';
import HorizontalLine from '../../../components/HorizontalLine/Line';
import SingleCategory from '../../../components/ItemDetails/SingleCategory';
import AddToCartBtn from '../../../components/AddToCart/AddToCartBtn';
import { addToCart } from '../../../../store/auth/actions';
import { styles } from './style';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
  }

  setToken = (value) => {
    this.setState({
      token: value,
    });
    console.log('token:', value);
  };

  getToken = async (setValue) => {
    try {
      const storedUserToken = await AsyncStorage.getItem('userToken');
      setValue(storedUserToken);
    } catch (error) {
      // error reading value
    }
  };

  componentDidMount() {
    this.getToken(this.setToken).then();
    console.log('componentDidMount');
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
            <View style={styles.priceAndBtn}>
              <Text style={styles.productPrice}>{this.props.route.params.product.price} zł</Text>
              <AddToCartBtn
                onPress={() => addToCart(this.state.token, 1, this.props.route.params.identifier)}
              />
            </View>
            <SingleCategory
              category="Opis:"
              description={this.props.route.params.product.description}
            />
            <SingleCategory
              category="Kategoria:"
              description={this.props.route.params.product.category}
            />
            <SingleCategory
              category="Producent:"
              description={this.props.route.params.product.manufacturer}
            />
            <SingleCategory
              category="Kolor:"
              description={this.props.route.params.product.color.name}
            >
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
