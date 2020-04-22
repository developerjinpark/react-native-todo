import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Count, { num } from './Count.old.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Count count={num} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
