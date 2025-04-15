import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Platform } from 'react-native';
import { IconButton, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const SplashScreen3 = ({ navigation, disableAutoNavigation, showGetStarted }) => {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.5);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      })
    ]).start();

    if (!disableAutoNavigation) {
      setTimeout(() => {
        navigation.replace('Welcome');
      }, 3000);
    }
  }, [navigation, fadeAnim, scaleAnim]);

  return (
    <LinearGradient
      colors={['#007BFF', '#03C03C']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
        <IconButton icon="fingerprint" size={120} color="#FFD700" style={styles.icon} />
        <Text style={styles.title}>Biometric Access</Text>
        <Text style={styles.description}>
          Unlock your vault with ease using biometric authentication for maximum security.
        </Text>
        {showGetStarted && (
          <Animated.View style={[styles.buttonContainer, { opacity: fadeAnim }]}>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Login')}
              style={styles.button}
              labelStyle={styles.buttonLabel}
            >
              Get Started
            </Button>
          </Animated.View>
        )}
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
  content: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  icon: {
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700', // Gold
    marginBottom: 15,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 25,
    lineHeight: 24,
  },
  buttonContainer: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonLabel: {
    color: '#007BFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SplashScreen3;
