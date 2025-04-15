import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import React, { useState } from 'react';
import OnboardingScreen from './screens/OnboardingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007BFF', // Blue
    accent: '#03C03C', // Green
    secondary: '#FFD700', // Gold
  },
};

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isFirstLaunch ? 'Onboarding' : 'Login'}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'PQMobile Vault' }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
