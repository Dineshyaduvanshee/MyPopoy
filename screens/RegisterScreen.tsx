// screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

// Define the API endpoint
const API_BASE_URL = 'https://your-backend-api.com';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [rollNumber, setRollNumber] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [classSection, setClassSection] = useState('');
  const [section, setSection] = useState('');

  const handleRegister = async () => {
    try {
      const userData = {
        rollNumber,
        name,
        address,
        class: classSection,
        section,
      };
      const response = await axios.post(`${API_BASE_URL}/register`, userData);
      if (response.status === 201) {
        Alert.alert('Registration Successful', 'You have been registered successfully');
        navigation.navigate('Login');
      } else {
        Alert.alert('Registration Failed', 'An error occurred during registration');
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Registration Failed', 'An error occurred while registering');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Roll Number"
        value={rollNumber}
        onChangeText={setRollNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Class"
        value={classSection}
        onChangeText={setClassSection}
      />
      <TextInput
        style={styles.input}
        placeholder="Section"
        value={section}
        onChangeText={setSection}
      />
      <Button title="Register" onPress={handleRegister} />
      <Button
        title="Back to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default RegisterScreen;
