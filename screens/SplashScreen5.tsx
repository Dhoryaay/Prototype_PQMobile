import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import { SplashScreen4Props } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const SplashScreen4: React.FC<SplashScreen4Props> = ({ navigation, disableAutoNavigation, showEnableOffline = true }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 8, useNativeDriver: true }),
    ]).start();

    if (!disableAutoNavigation) {
      setTimeout(() => navigation.navigate('Home'), 3000);
    }
  }, [navigation, disableAutoNavigation, fadeAnim, scaleAnim]);

  return (
    <LinearGradient
      colors={['#121212', '#121212']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>  
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="wifi-strength-off-outline" size={180} color="#4CAF50" />
        </View>
        <Text style={styles.title}>Works Completely Offline</Text>
        <Text style={styles.description}>
          Encrypt & decrypt your files on-device—no internet needed, ever.
        </Text>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: -height * 0.25,
  },
  iconContainer: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -height * 0.15,
    marginBottom: 20, // unified gap between icon and title
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 0, // unified spacing from icon
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    borderRadius: 8,
    paddingHorizontal: 30,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default SplashScreen4;
