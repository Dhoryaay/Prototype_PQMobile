import React from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
// Import PagerView conditionally
let PagerView;
if (Platform.OS !== 'web') {
  PagerView = require('react-native-pager-view').default;
}
import SplashScreen1 from './SplashScreen1';
import SplashScreen2 from './SplashScreen2';
import SplashScreen3 from './SplashScreen3';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  // For web platform, show only the first splash screen
  if (Platform.OS === 'web') {
    return (
      <View style={styles.slide}>
        <SplashScreen1 navigation={navigation} disableAutoNavigation />
      </View>
    );
  }
  
  // For mobile platforms, use PagerView
  return (
    <PagerView
      style={styles.wrapper}
      initialPage={0}
    >
      <View style={styles.slide} key="1">
        <SplashScreen1 navigation={navigation} disableAutoNavigation />
      </View>
      <View style={styles.slide} key="2">
        <SplashScreen2 navigation={navigation} disableAutoNavigation />
      </View>
      <View style={styles.slide} key="3">
        <SplashScreen3 navigation={navigation} disableAutoNavigation showGetStarted />
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    width,
    height,
  },
  dot: {
    backgroundColor: 'rgba(255,215,0,0.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: '#FFD700',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
});

export default OnboardingScreen;
