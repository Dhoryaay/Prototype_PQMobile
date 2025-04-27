import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, Image, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SplashScreenProps } from '../types';

const { width, height } = Dimensions.get('window');

const SplashScreen1: React.FC<SplashScreenProps> = ({ navigation, disableAutoNavigation, hideButtons = false }) => {
  // Animation values
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.9)).current;
  
  useEffect(() => {
    // Start animations when component mounts
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <LinearGradient
      colors={['#121212', '#121212']} 
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {/* Decorative circles removed for simplicity */}
      
      <Animated.View 
        style={[
          styles.content, 
          { 
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }] 
          }
        ]}
      >
        <Text style={styles.welcomeText}>Welcome to</Text>
        <View style={styles.titleContainer}>
          <MaterialCommunityIcons name="shield-lock-outline" size={80} color="#FFFFFF" />
          <Text style={styles.title}>PQMobile</Text>
        </View>
        
        {/* Add the tagline */}
        <Text style={styles.tagline}>Secure Today. Unbreakable Tomorrow.</Text>
      </Animated.View>
      
      {!hideButtons && (
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            color="#0D47A1"
            style={styles.createButton}
            labelStyle={styles.buttonLabel}
            onPress={() => navigation.navigate('SignUp')}
          >
            Sign Up
          </Button>
          <Button
            mode="outlined"
            color="#0D47A1"
            style={styles.signInButton}
            labelStyle={[styles.signInLabel, { color: '#FFFFFF' }]}
            onPress={() => navigation.navigate('Login')}
          >
            Sign In
          </Button>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: -height * 0.25, // shift text upward
  },
  welcomeText: {
    fontSize: 22,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: '300',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  tagline: {
    fontSize: 18,
    color: '#ffffff',
    marginTop: 10,
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 40,
    left: 0,
  },
  createButton: {
    backgroundColor: '#0D47A1', // Dark blue accent
    borderRadius: 8,
    marginBottom: 12,
    paddingVertical: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonLabel: {
    color: '#FFFFFF', // White text on dark blue
    fontSize: 16,
    fontWeight: '600',
  },
  signInButton: {
    borderColor: '#0D47A1', // Dark blue border
    borderRadius: 8,
    borderWidth: 1,
  },
  signInLabel: {
    color: '#FFFFFF', // White text
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SplashScreen1;
