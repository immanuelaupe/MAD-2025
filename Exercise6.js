import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Title from './components2/Title';
import Input from './components2/Input';
import Button from './components2/Button';

const Exercise6 = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmit = () => {
    console.log('Registration Data:', {
      fullName,
      username,
      email,
      address,
      phoneNumber,
    });
  };

  return (
    <View style={styles.container}>
      <Title text="Registration" />
      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={setFullName}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={setUsername}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={setEmail}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={setAddress}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        keyboardType="numeric"
        onChangeText={setPhoneNumber}
      />
      <Button label="Register" onPress={onSubmit} />
    </View>
  );
};

export default Exercise6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
});
