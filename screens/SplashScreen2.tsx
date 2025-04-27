import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Platform } from 'react-native';
import { IconButton, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SplashScreenProps } from '../types';

const { width, height } = Dimensions.get('window');

const SplashScreen2: React.FC<SplashScreenProps> = ({ navigation, disableAutoNavigation }) => {
  // Use useRef for animation values to ensure consistent references
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    // Start animations when component mounts
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 1500, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 6, useNativeDriver: true }),
    ]).start();

    // Auto-navigate if not disabled
    if (!disableAutoNavigation) {
      setTimeout(() => {
        // Navigate to the next screen in the onboarding flow
        navigation.navigate('Home'); // Using a screen name from RootStackParamList
      }, 3000);
    }
  }, [navigation, disableAutoNavigation, fadeAnim, scaleAnim]);

  return (
    <LinearGradient
      colors={['#121212', '#121212']} // Solid background for seamless transition
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Animated.View 
        style={[
          styles.content, 
          { 
            opacity: fadeAnim, 
            transform: [ { scale: scaleAnim } ]
          }
        ]}
      >
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="security"
            size={180}
            color="#4CAF50" // Green accent
          />
        </View>
        
        <Text style={styles.title}>Quantum-Resistant Security</Text>
        <Text style={styles.description}>
          <Text style={{ fontSize: 16 }}>
            Encrypt your files with post-quantum cryptography that even quantum computers can't break.
          </Text>
        </Text>
        
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  decorationContainer: {
    position: 'absolute',
    width: width,
    height: height,
  },
  decorationCircle: {
    position: 'absolute',
    borderRadius: 1000,
    opacity: 0.15,
  },
  circle1: {
    width: width * 0.8,
    height: width * 0.8,
    backgroundColor: '#5C6BC0',
    top: -width * 0.2,
    right: -width * 0.2,
  },
  circle2: {
    width: width * 0.6,
    height: width * 0.6,
    backgroundColor: '#7986CB',
    bottom: height * 0.2,
    left: -width * 0.2,
  },
  circle3: {
    width: width * 0.4,
    height: width * 0.4,
    backgroundColor: '#C5CAE9',
    top: height * 0.4,
    right: width * 0.1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: -height * 0.25,
  },
  iconContainer: {
    position: 'relative',
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // unified gap between icon and title
    marginTop: -height * 0.15,
    alignSelf: 'center',
  },
  mainIcon: {
    position: 'absolute',
    zIndex: 5,
  },
  topRightIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.8,
  },
  bottomLeftIcon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    opacity: 0.8,
  },
  topLeftIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    opacity: 0.8,
  },
  bottomRightIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    opacity: 0.8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 0, // unified spacing from icon
    textAlign: 'center',
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  tagline: {
    fontSize: 16,
    color: '#FFD700',
    marginTop: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFD700',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default SplashScreen2;
