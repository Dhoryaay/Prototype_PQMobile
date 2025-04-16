import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the navigation stack parameter list
export type RootStackParamList = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Settings: undefined;
};

// Define navigation prop types for use in components
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Define props for screens with navigation
export interface ScreenProps {
  navigation: NavigationProp;
}

// Define props for splash screens
export interface SplashScreenProps extends ScreenProps {
  disableAutoNavigation?: boolean;
}

// Define props for SplashScreen3
export interface SplashScreen3Props extends SplashScreenProps {
  showGetStarted?: boolean;
}
