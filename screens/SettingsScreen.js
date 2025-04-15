import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Platform } from 'react-native';
import { List, Switch, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const SettingsScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isBiometric, setIsBiometric] = React.useState(true);
  const [isCloudSync, setIsCloudSync] = React.useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleBiometric = () => setIsBiometric(!isBiometric);
  const toggleCloudSync = () => setIsCloudSync(!isCloudSync);

  const handleLogout = () => {
    navigation.navigate('Welcome');
  };


  return (
    <LinearGradient
      colors={['#007BFF', '#03C03C']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Customize your PQMobile experience</Text>

        <List.Section style={styles.listSection}>
          <List.Subheader style={styles.subheader}>Appearance</List.Subheader>
          <List.Item
            title="Dark Mode"
            description="Enable dark theme for the app"
            left={props => <List.Icon {...props} icon="brightness-6" color="#FFD700" />}
            right={props => <Switch value={isDarkMode} onValueChange={toggleDarkMode} color="#FFD700" />}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDescription}
          />

          <List.Subheader style={styles.subheader}>Security</List.Subheader>
          <List.Item
            title="Biometric Authentication"
            description="Unlock with fingerprint or face recognition"
            left={props => <List.Icon {...props} icon="fingerprint" color="#FFD700" />}
            right={props => <Switch value={isBiometric} onValueChange={toggleBiometric} color="#FFD700" />}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDescription}
          />

          <List.Subheader style={styles.subheader}>Storage</List.Subheader>
          <List.Item
            title="Cloud Sync"
            description="Securely sync files with cloud storage"
            left={props => <List.Icon {...props} icon="cloud" color="#FFD700" />}
            right={props => <Switch value={isCloudSync} onValueChange={toggleCloudSync} color="#FFD700" />}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDescription}
          />

          <List.Subheader style={styles.subheader}>Account</List.Subheader>
          <List.Item
            title="Account Details"
            description="View and edit your account information"
            left={props => <List.Icon {...props} icon="account" color="#FFD700" />}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDescription}
            onPress={() => {/* Placeholder for account details */}}
          />
          <List.Item
            title="Privacy Policy"
            description="Review our privacy policy and data usage"
            left={props => <List.Icon {...props} icon="shield-lock" color="#FFD700" />}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDescription}
            onPress={() => {/* Placeholder for privacy policy */}}
          />
        </List.Section>

        <Button 
          mode="contained" 
          onPress={handleLogout} 
          style={[styles.button, styles.logoutButton]}
          labelStyle={styles.buttonLabel}
        >
          Logout
        </Button>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: Platform.OS === 'web' ? '#007BFF' : 'transparent',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100, // Extra padding to ensure scrollable content
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700', // Gold
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 30,
    textAlign: 'center',
  },
  listSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  subheader: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  listTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listDescription: {
    color: '#E0E0E0',
    fontSize: 14,
  },
  button: {
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 30,
  },
  logoutButton: {
    backgroundColor: '#FFD700',
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

export default SettingsScreen;
