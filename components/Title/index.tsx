import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Welcome = () => {
  return <Text style={styles.title}>Welcome</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    marginBottom: 20,
  },
});

export default Welcome;
