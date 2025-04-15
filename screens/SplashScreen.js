import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0060F5',
  },
  image: {
    width: 150,
    height: 150,
    tintColor: '#ffffff',
  },
});

export default SplashScreen;
