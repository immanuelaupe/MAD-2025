import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from './components8/Header'; // Import Header dari folder components
import PhotoPicker from './components8/PhotoPicker'; // Import PhotoPicker
import InputField from './components8/InputField'; // Import InputField
import PrimaryButton from './components8/PrimaryButton'; // Import PrimaryButton

const Exercise8 = () => {
  const handleContinue = () => {
    // Logic untuk menangani tombol Continue ditekan
    console.log('Navigating to next step');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Sign Up" />
      <PhotoPicker />
      <View style={styles.formContainer}>
        <InputField label="Full Name" placeholder="Type your full name" />
        <InputField
          label="Email Address"
          placeholder="Type your email address"
          keyboardType="email-address"
        />
        <InputField
          label="Password"
          placeholder="Type your password"
          secureTextEntry
        />
        <PrimaryButton title="Continue" onPress={handleContinue} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  formContainer: {
    marginTop: 20,
  },
});

export default Exercise8;
