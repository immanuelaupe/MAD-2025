import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#02CF8E',
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
  },
  buttonText: {
    fontSize: 16,
    color: '#020202',
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
