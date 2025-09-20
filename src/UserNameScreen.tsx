// src/UserNameScreen.tsx
import { Pressable, StyleSheet, Text, View, SafeAreaView, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import HapticFeedback from 'react-native-haptic-feedback';

const UserNameScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);

  const handleContinue = () => {
    if (userName.trim() === '') {
      Alert.alert('Please enter your name.');
      return;
    }
    const userID = `user_${Date.now()}`;
    navigation.navigate('Call', { userName, userID });
    HapticFeedback.trigger('notificationSuccess', {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });
  };

  return (
    <Animatable.View animation="fadeIn" duration={800} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Animatable.Image
              source={{ uri: 'data:image/jpeg;base64,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' }}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>Join the Call</Text>
          <Text style={styles.subtitle}>Enter your name to get started</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Your Name</Text>
            <TextInput
              style={[styles.input, isInputFocused && styles.inputFocused]}
              placeholder="Enter your name"
              placeholderTextColor="#B0BEC5"
              onChangeText={setUserName}
              value={userName}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
          </View>

          <Pressable
            onPress={handleContinue}
            style={({ pressed }) => [
              styles.button,
              {
                opacity: pressed ? 0.7 : 1,
                transform: [{ scale: pressed ? 0.98 : 1 }],
                backgroundColor: pressed ? '#4DB6AC' : '#1A237E',
              },
            ]}
          >
            <Text style={styles.buttonText}>Continue to Call</Text>
          </Pressable>

          <Text style={styles.footerText}>
            By continuing, you agree to our terms of service
          </Text>
        </View>
      </View>
    </Animatable.View>
  );
};

export default UserNameScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A237E',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#607D8B',
    marginBottom: 25,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#607D8B',
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: '#CFD8DC',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#37474F',
    backgroundColor: '#FAFAFA',
  },
  inputFocused: {
    borderColor: '#4DB6AC',
    shadowColor: '#4DB6AC',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1A237E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: '#E0F7FA',
    fontSize: 18,
    fontWeight: '700',
  },
  footerText: {
    marginTop: 20,
    fontSize: 12,
    color: '#90A4AE',
    textAlign: 'center',
  },
});
