import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#007BFF', '#03C03C']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to PQMobile</Text>
        <Text style={styles.subtitle}>The Future-Proof App for Your Private Files</Text>
        <View style={styles.buttonContainer}>
          <Button 
            mode="contained" 
            onPress={() => navigation.navigate('Login')} 
            style={[styles.button, styles.loginButton]}
            labelStyle={styles.buttonLabel}
          >
            Login
          </Button>
          <Button 
            mode="outlined" 
            onPress={() => navigation.navigate('SignUp')} 
            style={[styles.button, styles.signupButton]}
            labelStyle={styles.buttonLabel}
            textColor="#FFD700"
          >
            Sign Up
          </Button>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,

  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#FFD700', // Gold
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 50,
    textAlign: 'center',
    color: '#FFFFFF',
    lineHeight: 24,
  },
  buttonContainer: {
    width: width * 0.7,
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
    paddingVertical: 8,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#FFD700',
  },
  signupButton: {
    borderColor: '#FFD700',
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

export default WelcomeScreen;
