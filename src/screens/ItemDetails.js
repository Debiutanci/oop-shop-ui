import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.screen}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text>Go back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 100,
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
    marginTop: 120,
    flex: 1,
  },
});

export default Products;
