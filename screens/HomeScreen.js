import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#007BFF', '#03C03C']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Your Secure Vault</Text>
        <Text style={styles.subtitle}>Manage your private files with ease</Text>

        <Card style={styles.card} onPress={() => {/* Placeholder for file upload */}}>
          <LinearGradient
            colors={['#FFD700', '#FFA500']}
            style={styles.cardGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Card.Content style={styles.cardContent}>
              <IconButton icon="cloud-upload" size={50} color="#007BFF" />
              <Title style={styles.cardTitle}>Upload Files</Title>
              <Paragraph style={styles.cardText}>Securely upload your files to the vault</Paragraph>
            </Card.Content>
          </LinearGradient>
        </Card>

        <Card style={styles.card} onPress={() => {/* Placeholder for file view */}}>
          <LinearGradient
            colors={['#FFD700', '#FFA500']}
            style={styles.cardGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Card.Content style={styles.cardContent}>
              <IconButton icon="folder" size={50} color="#007BFF" />
              <Title style={styles.cardTitle}>View Files</Title>
              <Paragraph style={styles.cardText}>Access your encrypted files anytime</Paragraph>
            </Card.Content>
          </LinearGradient>
        </Card>

        <Card style={styles.card} onPress={() => navigation.navigate('Settings')}>
          <LinearGradient
            colors={['#FFD700', '#FFA500']}
            style={styles.cardGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Card.Content style={styles.cardContent}>
              <IconButton icon="cog" size={50} color="#007BFF" />
              <Title style={styles.cardTitle}>Settings</Title>
              <Paragraph style={styles.cardText}>Configure security and sync options</Paragraph>
            </Card.Content>
          </LinearGradient>
        </Card>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,

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
    marginBottom: 40,
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  cardGradient: {
    borderRadius: 15,
  },
  cardContent: {
    alignItems: 'center',
    padding: 25,
  },
  cardTitle: {
    color: '#007BFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardText: {
    color: '#005B99',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default HomeScreen;
