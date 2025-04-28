import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { ScreenProps } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Create a custom theme with white labels
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4CAF50',
    onSurfaceVariant: '#FFFFFF', // Label color
    placeholder: '#FFFFFF',
    text: '#FFFFFF',
    onSurface: '#FFFFFF',
  },
};

const SignUpScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    // TODO: integrate real sign-up logic
    if (pin.length !== 6 || !/^[0-9]{6}$/.test(pin)) {
      alert('PIN must be exactly 6 digits');
      return;
    }
    // disallow sequential PINs (ascending or descending)
    let asc = true;
    let desc = true;
    for (let i = 1; i < pin.length; i++) {
      const prev = parseInt(pin[i - 1], 10);
      const curr = parseInt(pin[i], 10);
      if (curr !== prev + 1) asc = false;
      if (curr !== prev - 1) desc = false;
    }
    if (asc || desc) {
      alert('PIN should not be sequential numbers');
      return;
    }
    // disallow same digit three times in a row
    if (/([0-9])\1{2}/.test(pin)) {
      alert('PIN should not contain the same number 3 times in a row');
      return;
    }
    if (pin !== confirmPin) {
      alert('PINs do not match');
      return;
    }
    alert(`Signing up ${email}`);
    navigation.navigate('Home');
  };

  return (
    <PaperProvider theme={theme}>
    <LinearGradient
      colors={['#121212','#121212']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <MaterialCommunityIcons name="account-plus" size={100} color="#4CAF50" style={styles.icon} />
          <Text style={styles.title}>Create Your Account</Text>

          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            outlineColor="#2196F3"
            activeOutlineColor="#2196F3"
            textColor="#FFFFFF"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
          />

          <TextInput
            label="PIN (6 digits)"
            mode="outlined"
            value={pin}
            onChangeText={setPin}
            secureTextEntry={!showPin}
            right={<TextInput.Icon icon={showPin ? 'eye-off' : 'eye'} color="#2196F3" onPress={() => setShowPin(!showPin)} />}
            keyboardType="number-pad"
            maxLength={6}
            outlineColor="#2196F3"
            activeOutlineColor="#2196F3"
            textColor="#FFFFFF"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
          />

          <TextInput
            label="Confirm PIN"
            mode="outlined"
            value={confirmPin}
            onChangeText={setConfirmPin}
            secureTextEntry={!showConfirmPin}
            right={<TextInput.Icon icon={showConfirmPin ? 'eye-off' : 'eye'} color="#2196F3" onPress={() => setShowConfirmPin(!showConfirmPin)} />}
            keyboardType="number-pad"
            maxLength={6}
            outlineColor="#2196F3"
            activeOutlineColor="#2196F3"
            textColor="#FFFFFF"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
          />

          <TouchableOpacity onPress={handleSignUp} style={[styles.link, styles.signUpLink]}>
            <Text style={[styles.linkText, styles.signUpLinkText]}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.link, styles.alreadyLink]}>
            <Text style={[styles.linkText, styles.alreadyLinkText]}>Already have an account? Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  scroll: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#1E1E1E',
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
  buttonContent: {
    paddingVertical: 8,
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  signUpLink: {
    marginTop: 50,
  },
  signUpLinkText: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'none',
  },
  alreadyLink: {
    marginTop: 50,
  },
  alreadyLinkText: {
    fontSize: 15,
  },
});

export default SignUpScreen;
