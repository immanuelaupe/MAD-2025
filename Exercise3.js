import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const LoginPage = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Email Input Field */}
        <TextInput
          style={styles.inputField}
          placeholder="Enter your email"
          placeholderTextColor="#B48E70"
        />

        {/* Password Input Field */}
        <TextInput
          style={styles.inputField}
          placeholder="Enter your password"
          placeholderTextColor="#B48E70"
          secureTextEntry
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Prompt */}
        <Text style={styles.signUpPrompt}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </ScrollView>
    </>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#3E2723',
    paddingVertical: 50,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 40,
  },
  headerText: {
    fontSize: 48,
    fontWeight: '700',
    color: '#F5F5F5',
  },
  scrollContent: {
    backgroundColor: '#F5F5F5',
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  inputField: {
    height: 60,
    fontSize: 20,
    borderColor: '#D1B29A',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 20,
    backgroundColor: '#FFF4E6',
    marginBottom: 20,
    color: '#3E2723',
    shadowColor: '#3E2723',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  loginButton: {
    backgroundColor: '#6B4F4A',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    shadowColor: '#3E2723',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#F5F5F5',
  },
  signUpPrompt: {
    fontSize: 18,
    color: '#6B4F4A',
    marginTop: 20,
    textAlign: 'center',
  },
  signUpLink: {
    color: '#3E2723',
    fontWeight: '600',
  },
});
