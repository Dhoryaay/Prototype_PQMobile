import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, Image, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SplashScreenProps } from '../types';

const { width, height } = Dimensions.get('window');

const SplashScreen1: React.FC<SplashScreenProps> = ({ navigation, disableAutoNavigation }) => {
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
      colors={['#0B0B45', '#1A237E', '#283593']} // Deep blue gradient
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {/* Decorative elements */}
      <View style={styles.decorationContainer}>
        <View style={[styles.decorationCircle, styles.circle1]} />
        <View style={[styles.decorationCircle, styles.circle2]} />
        <View style={[styles.decorationCircle, styles.circle3]} />
      </View>
      
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
          <MaterialCommunityIcons name="shield-lock" size={80} color="#FFD700" />
          <Text style={styles.title}>PQMobile</Text>
        </View>
        
        {/* Add the tagline */}
        <Text style={styles.tagline}>Secure Today. Unbreakable Tomorrow.</Text>
      </Animated.View>
      
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.createButton}
          labelStyle={styles.buttonLabel}
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign Up
        </Button>
        <Button
          mode="outlined"
          style={styles.signInButton}
          labelStyle={styles.signInLabel}
          onPress={() => navigation.navigate('Login')}
        >
          Sign In
        </Button>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
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
  },
  iconContainer: {
    width: width * 0.8,
    height: width * 0.8,
    position: 'relative',
    marginBottom: 40,
  },
  floatingIcon: {
    position: 'absolute',
    opacity: 0.6,
  },
  topRight: {
    top: '20%',
    right: '20%',
  },
  centerRight: {
    top: '45%',
    right: '10%',
  },
  bottomRight: {
    bottom: '20%',
    right: '30%',
  },
  bottomLeft: {
    bottom: '15%',
    left: '20%',
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
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
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
    color: '#FFD700',
    marginTop: 10,
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 60,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 40,
    left: 0,
  },
  createButton: {
    backgroundColor: '#FFD700',
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
    color: '#283593',
    fontSize: 16,
    fontWeight: '600',
  },
  signInButton: {
    borderColor: '#FFD700',
    borderRadius: 8,
    borderWidth: 1,
  },
  signInLabel: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SplashScreen1;
