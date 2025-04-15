import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Placeholder for login logic
    navigation.navigate('Home');
  };

  return (
    <LinearGradient
      colors={['#007BFF', '#03C03C']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Login to PQMobile</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}
          theme={{ colors: { primary: '#FFD700', text: '#FFFFFF' } }}
          labelStyle={styles.inputLabel}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          mode="outlined"
          style={styles.input}
          theme={{ colors: { primary: '#FFD700', text: '#FFFFFF' } }}
          labelStyle={styles.inputLabel}
        />
        <Button 
          mode="contained" 
          onPress={handleLogin} 
          style={[styles.button, styles.loginButton]}
          labelStyle={styles.buttonLabel}
        >
          Login
        </Button>
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Don't have an account? Sign Up
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: width,

  },
  content: {
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700', // Gold
    marginBottom: 30,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
  },
  inputLabel: {
    color: '#FFD700',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#FFD700',
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
    color: '#FFD700',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
