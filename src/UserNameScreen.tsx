// src/UserNameScreen.tsx
import { Pressable, StyleSheet, Text, View, SafeAreaView, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const UserNameScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');

  const handleContinue = () => {
    if (userName.trim() === '') {
      Alert.alert('Please enter your name.');
      return;
    }
    const userID = `user_${Date.now()}`;
    navigation.navigate('Call', { userName, userID });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Enter Your Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#999"
          onChangeText={setUserName}
          value={userName}
        />
        <Pressable
          onPress={handleContinue}
          style={({ pressed }) => [
            styles.button,
            {
              opacity: pressed ? 0.7 : 1,
              transform: [{ scale: pressed ? 0.95 : 1 }],
            },
          ]}
        >
          <Text style={styles.buttonText}>Continue to Call</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default UserNameScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});