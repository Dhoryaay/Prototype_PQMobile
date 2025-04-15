import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const SplashScreen1 = ({ navigation, disableAutoNavigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <View style={styles.titleContainer}>
          <MaterialCommunityIcons name="shield-lock" size={80} color="#FFD700" />
          <Text style={styles.title}>PQMobile</Text>
        </View>
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#000',
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
    fontSize: 20,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 8,
    textAlign: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
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
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    paddingVertical: 8,
  },
  buttonLabel: {
    color: '#0060F5',
    fontSize: 16,
    fontWeight: '600',
  },
  signInButton: {
    borderColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
  },
  signInLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SplashScreen1;
