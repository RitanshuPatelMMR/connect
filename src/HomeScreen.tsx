// src/homeScreen.tsx
import { Pressable, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { View as AnimatableView, Text as AnimatableText } from 'react-native-animatable';
import HapticFeedback from 'react-native-haptic-feedback';

// Optional: for haptic feedback
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const titleRef = useRef<AnimatableText>(null);
  const subtitleRef = useRef<AnimatableText>(null);
  const buttonRef = useRef<AnimatableView>(null);

  useEffect(() => {
    titleRef.current?.fadeInUp?.(800);
    subtitleRef.current?.fadeInUp?.(1000);
    buttonRef.current?.bounceIn?.(1200);
  }, []);

  const handlePress = () => {
    HapticFeedback.trigger('impactLight', options);
    navigation.navigate('UserName');
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['#1A237E', '#3F51B5']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Animatable.View animation="fadeIn" duration={1000} delay={500}>
            <Image
              source={{ uri: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/web-6521588_1280.png' }}
              style={styles.logo}
              resizeMode="contain"
            />
          </Animatable.View>
          <Animatable.Text ref={titleRef} style={styles.title}>
            Zenith Video Calls
          </Animatable.Text>
          <Animatable.Text ref={subtitleRef} style={styles.subtitle}>
            Professional video calling with crystal clarity and secure connectivity.
          </Animatable.Text>
          <Animatable.View ref={buttonRef} style={styles.buttonContainer}>
            <Pressable
              onPress={handlePress}
              style={({ pressed }) => [
                styles.button,
                {
                  transform: [{ scale: pressed ? 0.95 : 1 }],
                  backgroundColor: pressed ? '#4DB6AC' : '#E0F7FA', // Button pressed state
                },
              ]}
            >
              <Text style={styles.buttonText}>Start Video Call</Text>
            </Pressable>
          </Animatable.View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#E0F7FA',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 18,
    color: '#E0F7FA',
    marginBottom: 50,
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.8,
  },
  buttonContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  button: {
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#1A237E',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});
