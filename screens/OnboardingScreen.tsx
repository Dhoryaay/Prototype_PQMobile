import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Platform, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import { ScreenProps } from '../types';

// Import PagerView conditionally
let PagerView: any;
if (Platform.OS !== 'web') {
  PagerView = require('react-native-pager-view').default;
}

// Update imports to use TypeScript versions
import SplashScreen1 from './SplashScreen1';
// These will be converted to TypeScript later
import SplashScreen2 from './SplashScreen2';
import SplashScreen3 from './SplashScreen3';
import SplashScreen4 from './SplashScreen4';
import SplashScreen5 from './SplashScreen5';

const { width, height } = Dimensions.get('window');

const OnboardingScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageOffset = React.useRef(new Animated.Value(0)).current;
  const DOT_SIZE = 8;
  const DOT_SPACING = DOT_SIZE + 8; // dot size + horizontal margins

  // For web platform, show only the first splash screen
  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <SplashScreen1 navigation={navigation} disableAutoNavigation />
        </View>
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
            color="#FFFFFF"
            style={styles.signInButton}
            labelStyle={styles.signInLabel}
            onPress={() => navigation.navigate('Login')}
          >
            Sign In
          </Button>
        </View>
      </View>
    );
  }
  
  // For mobile platforms, use PagerView with fixed buttons
  return (
    <View style={styles.container}>
      <PagerView
        style={styles.contentPager}
        initialPage={0}
        onPageSelected={(e: any) => setCurrentPage(e.nativeEvent.position)}
        onPageScroll={(e: any) => {
          const { position, offset } = e.nativeEvent;
          pageOffset.setValue(position + offset);
        }}
      >
        <View style={styles.contentSlide} key="1">
          <SplashScreen1 navigation={navigation} disableAutoNavigation hideButtons />
        </View>
        <View style={styles.contentSlide} key="2">
          <SplashScreen2 navigation={navigation} disableAutoNavigation />
        </View>
        <View style={styles.contentSlide} key="3">
          <SplashScreen3 navigation={navigation} disableAutoNavigation />
        </View>
        <View style={styles.contentSlide} key="4">
          <SplashScreen4 navigation={navigation} disableAutoNavigation />
        </View>
        <View style={styles.contentSlide} key="5">
          <SplashScreen5 navigation={navigation} disableAutoNavigation />
        </View>
      </PagerView>
      
      {/* Fixed buttons that don't move when swiping */}
      <View style={styles.buttonContainer}>
        {/* Action buttons with dark blue accent */}
        <Animated.View style={styles.dotsContainer}>
          {[0, 1, 2, 3, 4].map((index) => (
            <View key={index} style={styles.dot} />
          ))}
          <Animated.View
            style={[
              styles.activeIndicator,
              {
                transform: [
                  {
                    translateX: pageOffset.interpolate({
                      inputRange: [0, 1, 2, 3, 4],
                      outputRange: [0, DOT_SPACING, DOT_SPACING * 2, DOT_SPACING * 3, DOT_SPACING * 4],
                    }),
                  },
                ],
              },
            ]}
          />
        </Animated.View>
        
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
          color="#FFFFFF"
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
    width,
    height,
  },
  contentContainer: {
    flex: 1,
  },
  contentPager: {
    backgroundColor: '#121212',
    flex: 1,
  },
  contentSlide: {
    backgroundColor: '#121212',
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 40,
    left: 0,
  },
  dotsContainer: {
    flexDirection: 'row',
    width: 72, // DOT_SIZE (8) + DOT_SPACING (16)*4 = 72
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 20,
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
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
    color: '#FFFFFF', // White text on green
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

export default OnboardingScreen;
