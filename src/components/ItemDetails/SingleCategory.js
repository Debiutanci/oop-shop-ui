import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HorizontalLine from '../HorizontalLine/Line';

class SingleCategory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryName}>{this.props.category}</Text>
          <Text style={styles.text}>{this.props.description}</Text>
          {this.props.children}
        </View>
        <HorizontalLine />
      </>
    );
  }
}

const styles = StyleSheet.create({
  categoryWrapper: {
    flexDirection: 'row',
  },
  categoryName: {
    fontWeight: '600',
    color: '#7b7b7b',
  },
  text: {
    letterSpacing: 1,
    color: '#767676',
    marginLeft: 5,
    flex: 1,
  },
});

export default SingleCategory;
