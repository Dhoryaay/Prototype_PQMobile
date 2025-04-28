import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScreenProps } from '../types';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4CAF50',
    onSurfaceVariant: '#FFFFFF',
    placeholder: '#FFFFFF',
    text: '#FFFFFF',
    onSurface: '#FFFFFF',
  },
};

const LoginScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [pin, setPin] = useState<string>('');
  const [showPin, setShowPin] = useState<boolean>(false);

  const handleLogin = () => {
    // TODO: integrate real login logic
    navigation.navigate('Home');
  };

  return (
    <PaperProvider theme={theme}>
      <LinearGradient colors={['#121212','#121212']} style={styles.container} start={{ x:0,y:0 }} end={{ x:1,y:1 }}>
        <KeyboardAvoidingView style={styles.inner} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps='handled'>
            <MaterialCommunityIcons name='login' size={100} color='#4CAF50' style={styles.icon} />
            <Text style={styles.title}>Login to PQMobile</Text>
            <TextInput
              label='Email'
              mode='outlined'
              value={email}
              onChangeText={setEmail}
              keyboardType='email-address'
              autoCapitalize='none'
              outlineColor='#2196F3'
              activeOutlineColor='#2196F3'
              textColor='#FFFFFF'
              placeholderTextColor='#FFFFFF'
              style={styles.input}
            />
            <TextInput
              label='PIN (6 digits)'
              mode='outlined'
              value={pin}
              onChangeText={setPin}
              secureTextEntry={!showPin}
              right={<TextInput.Icon icon={showPin ? 'eye-off' : 'eye'} color='#2196F3' onPress={() => setShowPin(!showPin)} />}
              keyboardType='number-pad'
              maxLength={6}
              outlineColor='#2196F3'
              activeOutlineColor='#2196F3'
              textColor='#FFFFFF'
              placeholderTextColor='#FFFFFF'
              style={styles.input}
            />
            <TouchableOpacity onPress={handleLogin} style={[styles.link, styles.loginLink]}>
              <Text style={[styles.linkText, styles.loginLinkText]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={[styles.link, styles.signUpLink]}>
              <Text style={[styles.linkText, styles.signUpLinkText]}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex:1 },
  inner: { flex:1, paddingHorizontal:20, justifyContent:'center' },
  scroll: { alignItems:'center', paddingVertical:40 },
  icon: { marginBottom:20 },
  title: { fontSize:28, color:'#FFFFFF', fontWeight:'bold', marginBottom:20, textAlign:'center' },
  input: { width:'100%', marginBottom:15, backgroundColor:'#1E1E1E' },
  link: { marginTop:20 },
  loginLink: { marginTop:50 },
  loginLinkText: { fontSize:20, fontWeight:'bold', textDecorationLine:'none' },
  signUpLink: { marginTop:50 },
  linkText: { color:'#FFFFFF', textDecorationLine:'underline' },
  signUpLinkText: { fontSize:15 },
});

export default LoginScreen;
