import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class HorizontalLine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.line} />;
  }
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: '#848484',
    width: '100%',
    marginTop: 5,
    marginBottom: 15,
  },
});

export default HorizontalLine;
