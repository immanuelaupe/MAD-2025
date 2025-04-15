import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton}>
        <Image source={require('../assets/arrow.png')} style={styles.arrow} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  backButton: {
    marginRight: 10,
  },
  arrow: {
    width: 12,
    height: 20,
  },
  title: {
    fontSize: 22,
    color: '#020202',
    marginLeft: 25,
  },
});

export default Header;
