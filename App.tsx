// 1. Import core component react-native
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// 2. Create component
const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#B48E70"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#B48E70"
          secureTextEntry
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <Text style={styles.subTitle}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </ScrollView>
    </>
  );
};

// 3. Export component
export default App;

// 4. Styling with Centered and Larger UI Elements
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3E2723', // Dark Brown for header
    paddingVertical: 50,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 40,
  },
  title: {
    fontSize: 48, // Increased title size
    fontWeight: '700',
    color: '#F5F5F5', // Light Beige text
  },
  scrollContainer: {
    backgroundColor: '#F5F5F5', // Beige background for the main content
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  input: {
    height: 60, // Increased height
    fontSize: 20, // Larger font size
    borderColor: '#D1B29A', // Light Brown Border
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 20,
    backgroundColor: '#FFF4E6', // Light beige background for input
    marginBottom: 20,
    color: '#3E2723', // Dark Brown text color
    shadowColor: '#3E2723', // Shadow effect to give depth
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  button: {
    backgroundColor: '#6B4F4A', // Dark Brown button background
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    shadowColor: '#3E2723', // Shadow for button
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: {
    fontSize: 22, // Larger font size for the button
    fontWeight: '600',
    color: '#F5F5F5', // Light Beige text color for button
  },
  subTitle: {
    fontSize: 18,
    color: '#6B4F4A', // Warm brown text color
    marginTop: 20,
    textAlign: 'center',
  },
  signUpLink: {
    color: '#3E2723', // Dark Brown for Sign Up link
    fontWeight: '600',
  },
});
