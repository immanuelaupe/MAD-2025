import React from 'react';
import {TextInput, View, Text, StyleSheet, TextInputProps} from 'react-native';

interface InputFieldProps extends TextInputProps {
  label: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    borderColor: '#020202',
  },
});

export default InputField;
